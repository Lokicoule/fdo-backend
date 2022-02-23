import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateReferentialInput } from './create-referential.input';

@InputType()
export class UpdateReferentialInput extends PartialType(
  CreateReferentialInput,
) {
  @Field(() => String)
  readonly id: string;
}
