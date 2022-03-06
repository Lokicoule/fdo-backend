import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { createBaseResolver } from '../../core/resolver/resolver';
import { ParameterReferentialProduct } from './entities/parameter-referential-product.entity';
import {
  ReferentialProduct,
  ReferentialProductDocument,
} from './entities/referential-product.entity';
import { CreateReferentialProductInput } from './inputs/create-referential-product.input';
import { GetReferentialProductInput } from './inputs/get-referential-product.input';
import { UpdateReferentialProductInput } from './inputs/update-referential-product.input';
import { ReferentialProductService } from './referential-product.service';

const ReferentialProductBaseResolver = createBaseResolver(
  ReferentialProduct,
  GetReferentialProductInput,
);
@Resolver(() => ReferentialProduct)
export class ReferentialProductResolver extends ReferentialProductBaseResolver {
  constructor(private readonly service: ReferentialProductService) {
    super(service);
  }

  @Mutation(() => ReferentialProduct)
  createReferentialProduct(
    @Args('createReferentialProductInput')
    payload: CreateReferentialProductInput,
  ): Observable<ReferentialProduct> {
    return this.service.create(payload);
  }

  @Mutation(() => ReferentialProduct)
  updateReferentialProduct(
    @Args('updateReferentialProductInput')
    payload: UpdateReferentialProductInput,
  ): Observable<ReferentialProduct> {
    return this.service.update(payload.id, payload);
  }

  @ResolveField()
  parameters(
    @Parent() document: ReferentialProductDocument,
    @Args('populate') populate: boolean,
  ): Observable<ParameterReferentialProduct[]> {
    if (!populate) return;
    return this.service.populateParameters(document);
  }
}
