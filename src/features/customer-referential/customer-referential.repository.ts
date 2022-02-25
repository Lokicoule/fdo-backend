import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/core/repository/repository';
import {
  CustomerReferential,
  CustomerReferentialDocument,
  CustomerReferentialName,
} from './entities/customer-referential.entity';

export class CustomerReferentialRepository extends Repository<CustomerReferential> {
  constructor(
    @InjectModel(CustomerReferentialName)
    private customerReferentialModel: Model<CustomerReferentialDocument>,
  ) {
    super(customerReferentialModel);
  }
}
