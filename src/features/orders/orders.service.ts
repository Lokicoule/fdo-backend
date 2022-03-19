import { Injectable } from '@nestjs/common';
import { defer, Observable, switchMap } from 'rxjs';
import { addDays } from 'src/core/helpers/date.helpers';
import { Service } from 'src/core/service';
import { retryWhenDuplicate } from '../../core/helpers/observer.helper';
import { UseCaseReferentialEnum } from '../../features-referential/core/enums/usecase-referential.enum';
import { generateCodeFromParamsUseCase } from '../../features-referential/core/use-cases/generate-code-from-params/generate-code-from-params';
import { getUpdatedReferentialByCounterIncrementUseCase } from '../../features-referential/core/use-cases/get-incremented-counter-param/get-updated-referential-by-counter-increment';
import { ReferentialOrderService } from '../../features-referential/referential-order/referential-order.service';
import { Customer } from '../customers/entities/customer.entity';
import { Product } from '../products/entities/product.entity';
import { OrderItem } from './entities/order-item.entity';
import { Order, OrderDocument } from './entities/order.entity';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService extends Service<Order> {
  constructor(
    private readonly orderRepository: OrdersRepository,
    private readonly referentialService: ReferentialOrderService,
  ) {
    super(orderRepository);
  }

  override create(payload: Order) {
    const { code, billingDate: _billingDate, ...others } = payload;
    const billingDate = _billingDate || new Date();
    const dueDate = this.calculateDueDateFromBillingDate(
      payload.dueDate,
      billingDate,
    );
    if (code)
      return this.orderRepository.create({
        ...payload,
        dueDate,
        billingDate,
      });

    return defer(() =>
      this.referentialService.findOne({
        useCase: UseCaseReferentialEnum.CODE_GENERATOR,
      }),
    ).pipe(
      switchMap((orderReferential) =>
        this.referentialService.createOrUpdateCodeGenerator(
          getUpdatedReferentialByCounterIncrementUseCase(orderReferential),
        ),
      ),
      switchMap((orderReferential) =>
        this.orderRepository.create({
          ...others,
          code: generateCodeFromParamsUseCase(orderReferential.parameters),
          dueDate,
          billingDate,
        }),
      ),
      retryWhenDuplicate(),
    );
  }

  populateItems(document: OrderDocument): Observable<OrderItem[]> {
    return this.orderRepository.populate<OrderItem[]>(
      document,
      'items',
      OrderItem.name,
      (order: Order) => order.items,
      [{ path: 'product', model: Product.name }],
    );
  }

  populateCustomer(document: OrderDocument): Observable<Customer> {
    return this.orderRepository.populate<Customer>(
      document,
      'customer',
      Customer.name,
      (order: Order) => order.customer,
    );
  }

  private calculateDueDateFromBillingDate(
    dueDate: Date,
    billingDate: Date,
  ): Date {
    return billingDate && !dueDate ? addDays(billingDate, 30) : dueDate;
  }
}
