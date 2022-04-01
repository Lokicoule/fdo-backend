import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsRepository } from './products.repository';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { Product, ProductSchema } from './entities/product.entity';
import { ReferentialProductModule } from '../referential-product/referential-product.module';

@Module({
  imports: [
    ReferentialProductModule,
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [ProductsRepository, ProductsResolver, ProductsService],
})
export class ProductsModule {}
