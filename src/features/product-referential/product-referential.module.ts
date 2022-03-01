import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductReferentialRepository } from './product-referential.repository';
import { ProductReferentialResolver } from './product-referential.resolver';
import { ProductReferentialService } from './product-referential.service';
import {
  ProductReferentialName,
  ProductReferentialSchema,
} from './entities/product-referential.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductReferentialName, schema: ProductReferentialSchema },
    ]),
  ],
  providers: [
    ProductReferentialResolver,
    ProductReferentialService,
    ProductReferentialRepository,
  ],
  exports: [ProductReferentialService],
})
export class ProductReferentialModule {}
