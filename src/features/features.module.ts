import { Module } from '@nestjs/common';
import { ReferentialCustomerModule } from './referential-customer/referential-customer.module';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { ReferentialProductModule } from './referential-product/referential-product.module';

@Module({
  imports: [
    CustomersModule,
    ProductsModule,
    ReferentialCustomerModule,
    ReferentialProductModule,
  ],
})
export class FeaturesModule {}
