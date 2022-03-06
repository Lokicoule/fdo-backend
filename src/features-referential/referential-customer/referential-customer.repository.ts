import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/core/repository/repository';
import {
  ReferentialCustomer,
  ReferentialCustomerDocument,
  ReferentialCustomerName,
} from './entities/referential-customer.entity';

export class ReferentialCustomerRepository extends Repository<ReferentialCustomer> {
  constructor(
    @InjectModel(ReferentialCustomerName)
    private referentialCustomerModel: Model<ReferentialCustomerDocument>,
  ) {
    super(referentialCustomerModel);
  }
}
