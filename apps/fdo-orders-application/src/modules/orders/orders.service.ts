import {
  Service,
  UseCaseReferentialEnum,
  getIncrementedCounterParamUseCase,
  generateCodeFromParamsUseCase,
  retryWhenDuplicate,
  addDays,
} from '@app/fdo-core';
import { Injectable } from '@nestjs/common';
import { defer, switchMap } from 'rxjs';
import { ReferentialOrderService } from '../referential-order/business/referential-order.service';
import { Order } from './entities/order.entity';
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
          getIncrementedCounterParamUseCase(orderReferential),
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

  private calculateDueDateFromBillingDate(
    dueDate: Date,
    billingDate: Date,
  ): Date {
    return billingDate && !dueDate ? addDays(billingDate, 30) : dueDate;
  }
}
