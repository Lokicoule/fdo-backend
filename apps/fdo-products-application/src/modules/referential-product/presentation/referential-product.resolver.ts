import { createBaseResolver } from '@app/fdo-core/core/resolver';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { ParameterReferentialProduct } from '../domain/entities/parameter-referential-product.entity';
import {
  ReferentialProduct,
  ReferentialProductDocument,
} from '../domain/entities/referential-product.entity';
import { CreateReferentialProductInput } from './inputs/create-referential-product.input';
import { UpdateReferentialProductInput } from './inputs/update-referential-product.input';
import { ReferentialProductService } from '../business/referential-product.service';

const ReferentialProductBaseResolver = createBaseResolver(ReferentialProduct);
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
    return this.service.create(plainToClass(ReferentialProduct, payload));
  }

  @Mutation(() => ReferentialProduct)
  updateReferentialProduct(
    @Args('id') id: string,
    @Args('updateReferentialProductInput')
    payload: UpdateReferentialProductInput,
  ): Observable<ReferentialProduct> {
    return this.service.update(id, plainToClass(ReferentialProduct, payload));
  }

  @ResolveField()
  parameters(
    @Parent() document: ReferentialProductDocument,
    @Args('populate') populate: boolean,
  ): Observable<ParameterReferentialProduct[]> {
    if (!populate) return;
    return this.service.populateParameters(document);
  }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: any;
  }): Observable<ReferentialProduct> {
    return this.service.findById(reference.id);
  }
}
