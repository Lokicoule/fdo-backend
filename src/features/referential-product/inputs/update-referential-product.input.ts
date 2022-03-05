import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateReferentialProductInput } from './create-referential-product.input';

@InputType()
export class UpdateReferentialProductInput extends PartialType(
  CreateReferentialProductInput,
) {
  @Field(() => String)
  readonly id: string;
}
