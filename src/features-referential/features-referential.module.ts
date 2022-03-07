import { Module } from '@nestjs/common';
import { ReferentialCustomerModule } from './referential-customer/referential-customer.module';
import { ReferentialProductModule } from './referential-product/referential-product.module';
import { ReferentialOrderModule } from './referential-order/referential-order.module';

@Module({
  imports: [
    ReferentialCustomerModule,
    ReferentialProductModule,
    ReferentialOrderModule,
  ],
})
export class FeaturesReferentialModule {}
