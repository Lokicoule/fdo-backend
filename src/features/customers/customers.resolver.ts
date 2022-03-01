import { Resolver } from '@nestjs/graphql';
import { Resolver as CoreResolver } from 'src/core/resolver/resolver';
import { CustomersService } from './customers.service';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './inputs/create-customer.input';
import { GetCustomerInput } from './inputs/get-customer.input';
import { UpdateCustomerInput } from './inputs/update-customer.input';

@Resolver(() => Customer)
export class CustomersResolver extends CoreResolver(
  Customer,
  CreateCustomerInput,
  UpdateCustomerInput,
  GetCustomerInput,
) {
  constructor(private readonly service: CustomersService) {
    super(service);
  }
}
