import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { createBaseResolver } from '../../core/resolver/resolver';
import { OrdersService } from './orders.service';
import { Order, OrderDocument } from './entities/order.entity';
import { CreateOrderInput } from './inputs/create-order.input';
import { GetOrderInput } from './inputs/get-order.input';
import { UpdateOrderInput } from './inputs/update-order.input';
import { OrderItem } from './entities/order-item.entity';

const OrdersBaseResolver = createBaseResolver(Order, GetOrderInput);

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
    return this.service.create(payload);
  }

  @Mutation(() => Order)
  updateOrder(
    @Args('updateOrderInput')
    payload: UpdateOrderInput,
  ): Observable<Order> {
    return this.service.update(payload.id, payload);
  }

  @ResolveField()
  items(
    @Parent() document: OrderDocument,
    @Args('populate') populate: boolean,
  ): Observable<OrderItem[]> {
    if (!populate) return;
    return this.service.populateItems(document);
  }
}
