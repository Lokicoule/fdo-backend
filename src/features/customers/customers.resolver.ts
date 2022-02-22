import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { CreateCustomerInput } from './dtos/create-customer.input';
import { GetCustomerInput } from './dtos/get-customer.input';
import { RemoveCustomersInput } from './dtos/remove-customers.input';
import { UpdateCustomerInput } from './dtos/update-customer.input';
import { Customer } from './entities/customer.entity';

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(private readonly service: CustomersService) {}

  @Mutation(() => Customer)
  createCustomer(@Args('createCustomerInput') payload: CreateCustomerInput) {
    return this.service.createCustomer(payload);
  }

  @Query(() => [Customer], { name: 'customers', nullable: true })
  getCustomers() {
    return this.service.getCustomers();
  }

  @Query(() => Customer, { name: 'customer', nullable: true })
  getCustomer(
    @Args('getCustomerInput', { type: () => GetCustomerInput })
    filter: GetCustomerInput,
  ) {
    return this.service.getCustomer(filter);
  }

  @Mutation(() => Customer)
  updateCustomer(@Args('updateCustomerInput') payload: UpdateCustomerInput) {
    return this.service.updateCustomer(payload.id, payload);
  }

  @Mutation(() => Customer)
  removeCustomer(@Args('id', { type: () => String }) id: string) {
    return this.service.removeCustomer(id);
  }

  @Mutation(() => Boolean)
  removeCustomers(@Args('removeCustomersInput') filter: RemoveCustomersInput) {
    return this.service.removeCustomers(filter.ids);
  }
}
