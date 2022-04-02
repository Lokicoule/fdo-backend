import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReferentialProductRepository } from './persistence/referential-product.repository';
import { ReferentialProductResolver } from './presentation/referential-product.resolver';
import { ReferentialProductService } from './business/referential-product.service';
import {
  ReferentialProductName,
  ReferentialProductSchema,
} from './domain/entities/referential-product.entity';
import { SeederReferentialProductService } from './business/seeder-referential-product.service';

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
    SeederReferentialProductService,
  ],
  exports: [ReferentialProductService, SeederReferentialProductService],
})
export class ReferentialProductModule {}
