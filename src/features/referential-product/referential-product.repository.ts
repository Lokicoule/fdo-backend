import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/core/repository/repository';
import {
  ReferentialProduct,
  ReferentialProductDocument,
  ReferentialProductName,
} from './entities/referential-product.entity';

export class ReferentialProductRepository extends Repository<ReferentialProduct> {
  constructor(
    @InjectModel(ReferentialProductName)
    private referentialProductModel: Model<ReferentialProductDocument>,
  ) {
    super(referentialProductModel);
  }
}
