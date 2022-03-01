import { Module } from '@nestjs/common';
import { CustomerReferentialModule } from './customer-referential/customer-referential.module';
import { CustomersModule } from './customers/customers.module';
import { ProductReferentialModule } from './product-referential/product-referential.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    CustomersModule,
    CustomerReferentialModule,
    ProductsModule,
    ProductReferentialModule,
  ],
})
export class FeaturesModule {}
