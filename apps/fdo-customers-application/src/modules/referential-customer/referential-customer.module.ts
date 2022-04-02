import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReferentialCustomerRepository } from './persistence/referential-customer.repository';
import { ReferentialCustomerResolver } from './presentation/referential-customer.resolver';
import { ReferentialCustomerService } from './business/referential-customer.service';
import {
  ReferentialCustomerName,
  ReferentialCustomerSchema,
} from './domain/entities/referential-customer.entity';
import { SeederReferentialCustomerService } from './business/seeder-referential-customer.service';

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
    SeederReferentialCustomerService,
  ],
  exports: [SeederReferentialCustomerService, ReferentialCustomerService],
})
export class ReferentialCustomerModule {}
