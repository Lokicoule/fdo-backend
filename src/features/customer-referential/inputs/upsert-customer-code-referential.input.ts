import { Field, InputType } from '@nestjs/graphql';
import { KeyValueInput } from './key-value.input';

@InputType()
export class UpsertCustomerCodeReferentialInput {
  @Field(() => [KeyValueInput])
  readonly parameters: KeyValueInput[];
}
