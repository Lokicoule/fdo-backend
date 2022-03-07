import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReferentialOrderRepository } from './referential-order.repository';
import { ReferentialOrderResolver } from './referential-order.resolver';
import { ReferentialOrderService } from './referential-order.service';
import {
  ReferentialOrderName,
  ReferentialOrderSchema,
} from './entities/referential-order.entity';

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
  ],
  exports: [ReferentialOrderService],
})
export class ReferentialOrderModule {}
