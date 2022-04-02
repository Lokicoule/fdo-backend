import { Repository } from '@app/fdo-core';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './entities/order.entity';

export class OrdersRepository extends Repository<Order> {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {
    super(orderModel);
  }
}
