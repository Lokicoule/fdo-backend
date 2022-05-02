import { createBaseResolver } from '@app/fdo-core';
import {
  Args,
  Mutation,
  ResolveField,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { Customer } from './entities/customer.entity';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './inputs/create-order.input';
import { UpdateOrderInput } from './inputs/update-order.input';
import { OrdersService } from './orders.service';

const OrdersBaseResolver = createBaseResolver(Order);

@Resolver(() => Order)
export class OrdersResolver extends OrdersBaseResolver {
  constructor(private readonly service: OrdersService) {
    super(service);
  }

  @Mutation(() => Order)
  createOrder(
    @Args('createOrderInput')
    payload: CreateOrderInput,
  ): Observable<Order> {
    return this.service.create(plainToClass(Order, payload));
  }

  @Mutation(() => Order)
  updateOrder(
    @Args('id')
    id: string,
    @Args('updateOrderInput')
    payload: UpdateOrderInput,
  ): Observable<Order> {
    return this.service.update(id, plainToClass(Order, payload));
  }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    _id: string;
  }): Observable<Order> {
    return this.service.findById(reference._id);
  }
}
