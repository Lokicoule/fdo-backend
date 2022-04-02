import { Repository } from '@app/fdo-core';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ReferentialCustomer,
  ReferentialCustomerDocument,
  ReferentialCustomerName,
} from '../domain/entities/referential-customer.entity';

export class ReferentialCustomerRepository extends Repository<ReferentialCustomer> {
  constructor(
    @InjectModel(ReferentialCustomerName)
    private referentialCustomerModel: Model<ReferentialCustomerDocument>,
  ) {
    super(referentialCustomerModel);
  }
}
