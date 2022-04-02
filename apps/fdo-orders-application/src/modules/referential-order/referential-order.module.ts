import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReferentialOrderRepository } from './persistence/referential-order.repository';
import { ReferentialOrderResolver } from './presentation/referential-order.resolver';
import { ReferentialOrderService } from './business/referential-order.service';
import {
  ReferentialOrderName,
  ReferentialOrderSchema,
} from './domain/entities/referential-order.entity';
import { SeederReferentialOrderService } from './business/seeder-referential-order.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReferentialOrderName, schema: ReferentialOrderSchema },
    ]),
  ],
  providers: [
    ReferentialOrderResolver,
    ReferentialOrderService,
    ReferentialOrderRepository,
    SeederReferentialOrderService,
  ],
  exports: [ReferentialOrderService, SeederReferentialOrderService],
})
export class ReferentialOrderModule {}
