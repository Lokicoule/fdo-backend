import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReferentialOrderModule } from '../../features-referential/referential-order/referential-order.module';
import { OrdersRepository } from './orders.repository';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';
import { Order, OrderSchema } from './entities/order.entity';

@Module({
  imports: [
    ReferentialOrderModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  providers: [OrdersRepository, OrdersResolver, OrdersService],
})
export class OrdersModule {}
