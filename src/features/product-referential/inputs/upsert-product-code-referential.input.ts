import { Field, InputType } from '@nestjs/graphql';
import { KeyValueInput } from 'src/core/models/key-value/key-value.input';

@InputType()
export class UpsertProductCodeReferentialInput {
  @Field(() => [KeyValueInput])
  readonly parameters: KeyValueInput[];
}
