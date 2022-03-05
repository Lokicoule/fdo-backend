import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReferentialCustomerRepository } from './referential-customer.repository';
import { ReferentialCustomerResolver } from './referential-customer.resolver';
import { ReferentialCustomerService } from './referential-customer.service';
import {
  ReferentialCustomerName,
  ReferentialCustomerSchema,
} from './entities/referential-customer.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReferentialCustomerName, schema: ReferentialCustomerSchema },
    ]),
  ],
  providers: [
    ReferentialCustomerResolver,
    ReferentialCustomerService,
    ReferentialCustomerRepository,
  ],
  exports: [ReferentialCustomerService],
})
export class ReferentialCustomerModule {}
