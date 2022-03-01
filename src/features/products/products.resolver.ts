import { Resolver } from '@nestjs/graphql';
import { Resolver as CoreResolver } from 'src/core/resolver/resolver';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './inputs/create-product.input';
import { GetProductInput } from './inputs/get-product.input';
import { UpdateProductInput } from './inputs/update-product.input';

@Resolver(() => Product)
export class ProductsResolver extends CoreResolver(
  Product,
  CreateProductInput,
  UpdateProductInput,
  GetProductInput,
) {
  constructor(private readonly service: ProductsService) {
    super(service);
  }
}
