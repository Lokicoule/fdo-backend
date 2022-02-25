import { Module } from '@nestjs/common';
import { CustomerReferentialModule } from './customer-referential/customer-referential.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [CustomersModule, CustomerReferentialModule],
})
export class FeaturesModule {}
