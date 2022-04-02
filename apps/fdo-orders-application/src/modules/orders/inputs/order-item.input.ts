import { Field, InputType } from '@nestjs/graphql';
import { OrderProductInput } from './order-product.input';

@InputType()
export class OrderItemInput {
  @Field(() => OrderProductInput)
  readonly product: OrderProductInput;

  @Field(() => Number)
  readonly amount: number;

  @Field(() => Number)
  readonly unitPrice: number;
}
