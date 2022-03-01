import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { CustomerReferentialService } from './customer-referential.service';
import { GetReferentialCustomerInput } from './inputs/get-customer-referential.input';
import { UpsertCustomerCodeReferentialInput } from './inputs/upsert-customer-code-referential.input';
import {
  CustomerReferential,
  CustomerReferentialDocument,
} from './entities/customer-referential.entity';
import { ParameterEnum } from './enums/parameter.enum';
import { KeyValue } from './entities/key-value.entity';

@Resolver(() => CustomerReferential)
export class CustomerReferentialResolver {
  constructor(private readonly service: CustomerReferentialService) {}

  @Mutation(() => CustomerReferential)
  upsertCustomerCodeGenerator(
    @Args('upsertCustomerCodeReferentialInput')
    payload: UpsertCustomerCodeReferentialInput,
  ) {
    return this.service.createOrUpdateCustomerCode(payload);
  }

  @Query(() => [CustomerReferential], {
    name: 'customerReferential',
    nullable: true,
  })
  getCustomerReferential(
    @Args('getReferentialCustomerInput')
    filter: GetReferentialCustomerInput,
  ) {
    return this.service.getCustomerReferential(filter.useCase);
  }

  @ResolveField()
  parameters(
    @Parent() document: CustomerReferentialDocument,
    @Args('populate') populate: boolean,
  ): Observable<KeyValue[]> {
    if (!populate) return;
    return this.service.populateParameters(document);
  }
}
