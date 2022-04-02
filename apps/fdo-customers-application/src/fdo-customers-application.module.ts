import { Module } from '@nestjs/common';
import { FdoCustomersApplicationService } from './fdo-customers-application.service';
import { CustomersModule } from './modules/customers/customers.module';
import { ReferentialCustomerModule } from './modules/referential-customer/referential-customer.module';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [ProvidersModule, CustomersModule, ReferentialCustomerModule],
  providers: [FdoCustomersApplicationService],
})
export class FdoCustomersApplicationModule {}
