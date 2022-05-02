import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersRepository } from './orders.repository';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';
import { Order, OrderSchema } from './entities/order.entity';
import { ReferentialOrderModule } from '../referential-order/referential-order.module';
import { CustomerResolver } from './customer.resolver';

@Module({
  imports: [
    ReferentialOrderModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  providers: [
    OrdersRepository,
    OrdersResolver,
    OrdersService,
    CustomerResolver,
  ],
})
export class OrdersModule {}
