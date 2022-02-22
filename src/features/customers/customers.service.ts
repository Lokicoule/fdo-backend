import { Injectable } from '@nestjs/common';
import { CustomersRepository } from './customers.repository';
import { Customer } from './entities/customer.entity';
@Injectable()
export class CustomersService {
  constructor(private readonly repository: CustomersRepository) {}

  createCustomer(payload: Partial<Customer>) {
    return this.repository.create(payload);
  }

  getCustomers() {
    return this.repository.find();
  }

  getCustomer(filter: Partial<Customer>) {
    return this.repository.findOne(filter);
  }

  updateCustomer(id: string, payload: Partial<Customer>) {
    return this.repository.updateById(id, payload);
  }

  removeCustomer(id: string) {
    return this.repository.removeById(id);
  }

  removeCustomers(ids: string[]) {
    return this.repository.removeFromArray(ids);
  }
}
