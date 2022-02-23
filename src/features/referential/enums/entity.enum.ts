import { registerEnumType } from '@nestjs/graphql';
import { Customer } from 'src/features/customers/entities/customer.entity';
import { Product } from 'src/features/products/entities/product.entity';

export const EntityParameterAllowed = {
  PRODUCT: Product,
  CUSTOMER: Customer,
};

registerEnumType(EntityParameterAllowed, {
  name: 'EntityParameterAllowed',
});
