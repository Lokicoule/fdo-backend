import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { createBaseResolver } from '../../core/resolver/resolver';
import {
  Customer,
  CustomerDocument,
} from '../customers/entities/customer.entity';
import { OrderItem } from './entities/order-item.entity';
import { Order, OrderDocument } from './entities/order.entity';
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

  @ResolveField()
  items(
    @Parent() document: OrderDocument,
    @Args('populate') populate: boolean,
  ): Observable<OrderItem[]> {
    if (!populate) return;
    return this.service.populateItems(document);
  }

  @ResolveField()
  customer(
    @Parent() document: OrderDocument,
    @Args('populate') populate: boolean,
  ): Observable<Customer> {
    if (!populate) return;
    return this.service.populateCustomer(document);
  }
}
