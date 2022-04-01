import { createBaseResolver } from '@app/fdo-core';
import { Args, Mutation, Resolver, ResolveReference } from '@nestjs/graphql';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './inputs/create-product.input';
import { UpdateProductInput } from './inputs/update-product.input';
import { ProductsService } from './products.service';

const ProductsBaseResolver = createBaseResolver(Product);
@Resolver(() => Product)
export class ProductsResolver extends ProductsBaseResolver {
  constructor(private readonly service: ProductsService) {
    super(service);
  }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput')
    payload: CreateProductInput,
  ): Observable<Product> {
    return this.service.create(plainToClass(Product, payload));
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('id')
    id: string,
    @Args('updateProductInput')
    payload: UpdateProductInput,
  ): Observable<Product> {
    return this.service.update(id, plainToClass(Product, payload));
  }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Observable<Product> {
    return this.service.findById(reference.id);
  }
}
