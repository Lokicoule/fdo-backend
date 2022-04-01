import { Repository } from '@app/fdo-core';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './entities/product.entity';

export class ProductsRepository extends Repository<Product> {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<ProductDocument>,
  ) {
    super(ProductModel);
  }
}
