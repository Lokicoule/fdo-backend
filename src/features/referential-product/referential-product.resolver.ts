import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { KeyValue } from 'src/core/models/key-value/key-value.entity';
import { Resolver as CoreResolver } from 'src/core/resolver';
import { ParameterReferentialEnum } from '../referential/enums/parameter-referential.enum';
import { ReferentialProductService } from './referential-product.service';
import {
  ReferentialProduct,
  ReferentialProductDocument,
} from './entities/referential-product.entity';
import { CreateReferentialProductInput } from './inputs/create-referential-product.input';
import { GetReferentialProductInput } from './inputs/get-referential-product.input';
import { UpdateReferentialProductInput } from './inputs/update-referential-product.input';

@Resolver(() => ReferentialProduct)
export class ReferentialProductResolver extends CoreResolver(
  ReferentialProduct,
  CreateReferentialProductInput,
  UpdateReferentialProductInput,
  GetReferentialProductInput,
) {
  constructor(private readonly service: ReferentialProductService) {
    super(service);
  }

  @ResolveField()
  parameters(
    @Parent() document: ReferentialProductDocument,
    @Args('populate') populate: boolean,
  ): Observable<KeyValue<ParameterReferentialEnum>[]> {
    if (!populate) return;
    return this.service.populateParameters(document);
  }
}
