import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/core/repository/repository';
import { Customer, CustomerDocument } from './entities/customer.entity';

export class CustomersRepository extends Repository<Customer> {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
  ) {
    super(customerModel);
  }
}
