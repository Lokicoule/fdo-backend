import { Module } from '@nestjs/common';
import { FeaturesReferentialModule } from 'src/features-referential/features-referential.module';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
@Module({
  imports: [
    CustomersModule,
    ProductsModule,
    OrdersModule,
    FeaturesReferentialModule,
  ],
})
export class FeaturesModule {}
