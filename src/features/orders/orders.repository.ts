import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/core/repository/repository';
import { Order, OrderDocument } from './entities/order.entity';

export class OrdersRepository extends Repository<Order> {
  constructor(
    @InjectModel(Order.name) private OrderModel: Model<OrderDocument>,
  ) {
    super(OrderModel);
  }
}
