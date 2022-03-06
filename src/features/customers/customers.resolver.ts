import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { createBaseResolver } from '../../core/resolver/resolver';
import { CustomersService } from './customers.service';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './inputs/create-customer.input';
import { GetCustomerInput } from './inputs/get-customer.input';
import { UpdateCustomerInput } from './inputs/update-customer.input';

const CustomersBaseResolver = createBaseResolver(Customer, GetCustomerInput);

@Resolver(() => Customer)
export class CustomersResolver extends CustomersBaseResolver {
  constructor(private readonly service: CustomersService) {
    super(service);
  }

  @Mutation(() => Customer)
  createCustomer(
    @Args('createCustomerInput')
    payload: CreateCustomerInput,
  ): Observable<Customer> {
    return this.service.create(payload);
  }

  @Mutation(() => Customer)
  updateCustomer(
    @Args('updateCustomerInput')
    payload: UpdateCustomerInput,
  ): Observable<Customer> {
    return this.service.update(payload.id, payload);
  }
}
