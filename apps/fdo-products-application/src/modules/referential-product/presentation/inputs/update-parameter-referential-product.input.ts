import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateParameterReferentialProductInput } from './create-parameter-referential-product.input';

@InputType()
export class UpdateParameterReferentialProductInput extends PartialType(
  CreateParameterReferentialProductInput,
) {
  @Field(() => ID)
  readonly id: string;
}
