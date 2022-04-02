import { Module } from '@nestjs/common';
import { FdoOrdersApplicationService } from './fdo-orders-application.service';
import { OrdersModule } from './modules/orders/orders.module';
import { ReferentialOrderModule } from './modules/referential-order/referential-order.module';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [ProvidersModule, OrdersModule, ReferentialOrderModule],
  providers: [FdoOrdersApplicationService],
})
export class FdoOrdersApplicationModule {}
