import { Module } from '@nestjs/common';
import { ProvidersModule } from './providers/providers.module';
import { CustomersModule } from './customers/customers.module';
import { ReferentialCustomerModule } from './referential-customer/referential-customer.module';

@Module({
  imports: [ProvidersModule, CustomersModule, ReferentialCustomerModule],
})
export class FdoCustomersApplicationModule {}
