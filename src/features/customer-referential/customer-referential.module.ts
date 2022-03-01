import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerReferentialRepository } from './customer-referential.repository';
import { CustomerReferentialResolver } from './customer-referential.resolver';
import { CustomerReferentialService } from './customer-referential.service';
import {
  CustomerReferentialName,
  CustomerReferentialSchema,
} from './entities/customer-referential.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CustomerReferentialName, schema: CustomerReferentialSchema },
    ]),
  ],
  providers: [
    CustomerReferentialResolver,
    CustomerReferentialService,
    CustomerReferentialRepository,
  ],
  exports: [CustomerReferentialService],
})
export class CustomerReferentialModule {}
