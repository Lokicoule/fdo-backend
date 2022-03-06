import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { createBaseResolver } from '../../core/resolver/resolver';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './inputs/create-product.input';
import { GetProductInput } from './inputs/get-product.input';
import { UpdateProductInput } from './inputs/update-product.input';
import { ProductsService } from './products.service';

const ProductsBaseResolver = createBaseResolver(Product, GetProductInput);
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
    return this.service.create(payload);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductInput')
    payload: UpdateProductInput,
  ): Observable<Product> {
    return this.service.update(payload.id, payload);
  }
}
