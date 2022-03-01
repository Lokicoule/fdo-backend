import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/core/repository/repository';
import { Product, ProductDocument } from './entities/product.entity';

export class ProductsRepository extends Repository<Product> {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<ProductDocument>,
  ) {
    super(ProductModel);
  }
}
