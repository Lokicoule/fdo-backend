import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReferentialProductRepository } from './referential-product.repository';
import { ReferentialProductResolver } from './referential-product.resolver';
import { ReferentialProductService } from './referential-product.service';
import {
  ReferentialProductName,
  ReferentialProductSchema,
} from './entities/referential-product.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReferentialProductName, schema: ReferentialProductSchema },
    ]),
  ],
  providers: [
    ReferentialProductResolver,
    ReferentialProductService,
    ReferentialProductRepository,
  ],
  exports: [ReferentialProductService],
})
export class ReferentialProductModule {}
