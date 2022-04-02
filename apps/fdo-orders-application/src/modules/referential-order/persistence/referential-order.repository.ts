import { Repository } from '@app/fdo-core';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ReferentialOrder,
  ReferentialOrderDocument,
  ReferentialOrderName,
} from '../domain/entities/referential-order.entity';

export class ReferentialOrderRepository extends Repository<ReferentialOrder> {
  constructor(
    @InjectModel(ReferentialOrderName)
    private referentialOrderModel: Model<ReferentialOrderDocument>,
  ) {
    super(referentialOrderModel);
  }
}
