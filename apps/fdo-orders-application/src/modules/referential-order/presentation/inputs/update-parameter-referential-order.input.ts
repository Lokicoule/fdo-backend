import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateParameterReferentialOrderInput } from './create-parameter-referential-order.input';

@InputType()
export class UpdateParameterReferentialOrderInput extends PartialType(
  CreateParameterReferentialOrderInput,
) {
  @Field(() => ID)
  readonly id: string;
}
