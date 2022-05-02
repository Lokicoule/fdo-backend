import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { Customer } from './entities/customer.entity';
import { Order } from './entities/order.entity';
import { OrdersService } from './orders.service';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @ResolveField(() => [Order])
  public orders(@Parent() customer: Customer): Observable<Order[]> {
    return this.ordersService.findAllByCustomerId(customer._id);
  }
}
