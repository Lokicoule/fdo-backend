import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/core/repository/repository';
import {
  ReferentialOrder,
  ReferentialOrderDocument,
  ReferentialOrderName,
} from './entities/referential-order.entity';

export class ReferentialOrderRepository extends Repository<ReferentialOrder> {
  constructor(
    @InjectModel(ReferentialOrderName)
    private referentialOrderModel: Model<ReferentialOrderDocument>,
  ) {
    super(referentialOrderModel);
  }
}
