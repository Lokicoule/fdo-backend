import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { KeyValue } from 'src/core/models/key-value/key-value.entity';
import {
  ProductReferential,
  ProductReferentialDocument,
} from './entities/product-referential.entity';
import { GetReferentialProductInput } from './inputs/get-product-referential.input';
import { UpsertProductCodeReferentialInput } from './inputs/upsert-product-code-referential.input';
import { ProductReferentialService } from './product-referential.service';

@Resolver(() => ProductReferential)
export class ProductReferentialResolver {
  constructor(private readonly service: ProductReferentialService) {}

  @Mutation(() => ProductReferential)
  upsertProductCodeGenerator(
    @Args('upsertProductCodeReferentialInput')
    payload: UpsertProductCodeReferentialInput,
  ) {
    return this.service.createOrUpdateProductCode(payload);
  }

  @Query(() => [ProductReferential], {
    name: 'ProductReferential',
    nullable: true,
  })
  getProductReferential(
    @Args('getReferentialProductInput')
    filter: GetReferentialProductInput,
  ) {
    return this.service.getProductReferential(filter.useCase);
  }

  @ResolveField()
  parameters(
    @Parent() document: ProductReferentialDocument,
    @Args('populate') populate: boolean,
  ): Observable<KeyValue[]> {
    if (!populate) return;
    return this.service.populateParameters(document);
  }
}
