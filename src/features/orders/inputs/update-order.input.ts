import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateOrderInput } from './create-order.input';

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
  @Field(() => String)
  readonly id: string;
}
