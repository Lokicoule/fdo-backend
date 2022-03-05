import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { KeyValue } from 'src/core/models/key-value/key-value.entity';
import { Resolver as CoreResolver } from 'src/core/resolver';
import { ParameterReferentialEnum } from '../referential/enums/parameter-referential.enum';
import { ReferentialCustomerService } from './referential-customer.service';
import {
  ReferentialCustomer,
  ReferentialCustomerDocument,
} from './entities/referential-customer.entity';
import { CreateReferentialCustomerInput } from './inputs/create-referential-customer.input';
import { GetReferentialCustomerInput } from './inputs/get-referential-customer.input';
import { UpdateReferentialCustomerInput } from './inputs/update-referential-customer.input';

@Resolver(() => ReferentialCustomer)
export class ReferentialCustomerResolver extends CoreResolver(
  ReferentialCustomer,
  CreateReferentialCustomerInput,
  UpdateReferentialCustomerInput,
  GetReferentialCustomerInput,
) {
  constructor(private readonly service: ReferentialCustomerService) {
    super(service);
  }

  @ResolveField()
  parameters(
    @Parent() document: ReferentialCustomerDocument,
    @Args('populate') populate: boolean,
  ): Observable<KeyValue<ParameterReferentialEnum>[]> {
    if (!populate) return;
    return this.service.populateParameters(document);
  }
}
