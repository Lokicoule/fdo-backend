import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/core/repository/repository';
import {
  ProductReferential,
  ProductReferentialDocument,
  ProductReferentialName,
} from './entities/product-referential.entity';

export class ProductReferentialRepository extends Repository<ProductReferential> {
  constructor(
    @InjectModel(ProductReferentialName)
    private productReferentialModel: Model<ProductReferentialDocument>,
  ) {
    super(productReferentialModel);
  }
}
