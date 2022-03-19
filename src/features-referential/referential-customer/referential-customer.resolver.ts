import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { createBaseResolver } from '../../core/resolver/resolver';
import { ParameterReferentialCustomer } from './entities/parameter-referential-customer.entity';
import {
  ReferentialCustomer,
  ReferentialCustomerDocument,
} from './entities/referential-customer.entity';
import { CreateReferentialCustomerInput } from './inputs/create-referential-customer.input';
import { UpdateReferentialCustomerInput } from './inputs/update-referential-customer.input';
import { ReferentialCustomerService } from './referential-customer.service';

const ReferentialCustomerBaseResolver = createBaseResolver(ReferentialCustomer);
@Resolver(() => ReferentialCustomer)
export class ReferentialCustomerResolver extends ReferentialCustomerBaseResolver {
  constructor(private readonly service: ReferentialCustomerService) {
    super(service);
  }

  @Mutation(() => ReferentialCustomer)
  createReferentialCustomer(
    @Args('createReferentialCustomerInput')
    payload: CreateReferentialCustomerInput,
  ): Observable<ReferentialCustomer> {
    return this.service.create(plainToClass(ReferentialCustomer, payload));
  }

  @Mutation(() => ReferentialCustomer)
  updateReferentialCustomer(
    @Args('id') id: string,
    @Args('updateReferentialCustomerInput')
    payload: UpdateReferentialCustomerInput,
  ): Observable<ReferentialCustomer> {
    return this.service.update(id, plainToClass(ReferentialCustomer, payload));
  }

  @ResolveField()
  parameters(
    @Parent() document: ReferentialCustomerDocument,
    @Args('populate') populate: boolean,
  ): Observable<ParameterReferentialCustomer[]> {
    if (!populate) return;
    return this.service.populateParameters(document);
  }
}
