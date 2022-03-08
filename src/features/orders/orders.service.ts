import { Injectable } from '@nestjs/common';
import { defer, Observable, switchMap } from 'rxjs';
import { Service } from 'src/core/service';
import { retryWhenDuplicate } from '../../core/helpers/observer.helper';
import { ReferentialOrderService } from '../../features-referential/referential-order/referential-order.service';
import { UseCaseReferentialEnum } from '../../features-referential/core/enums/usecase-referential.enum';
import { generateCodeFromParamsUseCase } from '../../features-referential/core/use-cases/generate-code-from-params/generate-code-from-params';
import { getUpdatedReferentialByCounterIncrementUseCase } from '../../features-referential/core/use-cases/get-incremented-counter-param/get-updated-referential-by-counter-increment';
import { OrdersRepository } from './orders.repository';
import { Order, OrderDocument } from './entities/order.entity';
import { NestedPartial } from 'src/core/types/nested-partial.types';
import { OrderItem } from './entities/order-item.entity';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class OrdersService extends Service<Order> {
  constructor(
    private readonly orderRepository: OrdersRepository,
    private readonly referentialService: ReferentialOrderService,
  ) {
    super(orderRepository);
  }

  override create(payload: NestedPartial<Order>) {
    const { code } = payload;
    if (code) return this.orderRepository.create(payload);

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
          code: generateCodeFromParamsUseCase(orderReferential.parameters),
          ...payload,
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
}
