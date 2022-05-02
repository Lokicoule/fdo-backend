import { createBaseResolver } from '@app/fdo-core';
import { Args, Mutation, Resolver, ResolveReference } from '@nestjs/graphql';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { CustomersService } from './customers.service';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './inputs/create-customer.input';
import { UpdateCustomerInput } from './inputs/update-customer.input';

const CustomersBaseResolver = createBaseResolver(Customer);

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
    return this.service.create(plainToClass(Customer, payload));
  }

  @Mutation(() => Customer)
  updateCustomer(
    @Args('id') id: string,
    @Args('updateCustomerInput')
    payload: UpdateCustomerInput,
  ): Observable<Customer> {
    return this.service.update(id, plainToClass(Customer, payload));
  }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    _id: string;
  }): Observable<Customer> {
    return this.service.findById(reference._id);
  }
}
