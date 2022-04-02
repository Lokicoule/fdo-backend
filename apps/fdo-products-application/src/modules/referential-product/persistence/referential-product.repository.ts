import { Repository } from '@app/fdo-core';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ReferentialProduct,
  ReferentialProductDocument,
  ReferentialProductName,
} from '../domain/entities/referential-product.entity';

export class ReferentialProductRepository extends Repository<ReferentialProduct> {
  constructor(
    @InjectModel(ReferentialProductName)
    private referentialProductModel: Model<ReferentialProductDocument>,
  ) {
    super(referentialProductModel);
  }
}
