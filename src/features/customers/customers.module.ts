import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReferentialCustomerModule } from '../../features-referential/referential-customer/referential-customer.module';
import { CustomersRepository } from './customers.repository';
import { CustomersResolver } from './customers.resolver';
import { CustomersService } from './customers.service';
import { Customer, CustomerSchema } from './entities/customer.entity';

@Module({
  imports: [
    ReferentialCustomerModule,
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
  ],
  providers: [CustomersRepository, CustomersResolver, CustomersService],
})
export class CustomersModule {}
