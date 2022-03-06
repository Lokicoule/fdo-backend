import { Module } from '@nestjs/common';
import { ReferentialCustomerModule } from './referential-customer/referential-customer.module';
import { ReferentialProductModule } from './referential-product/referential-product.module';

@Module({
  imports: [ReferentialCustomerModule, ReferentialProductModule],
})
export class FeaturesReferentialModule {}
