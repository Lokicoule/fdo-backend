import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateReferentialOrderInput } from './create-referential-order.input';

@InputType()
export class UpdateReferentialOrderInput extends PartialType(
  CreateReferentialOrderInput,
) {
  @Field(() => String)
  readonly id: string;
}
