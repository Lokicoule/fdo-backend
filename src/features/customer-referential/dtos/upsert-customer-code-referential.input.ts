import { Field, InputType } from '@nestjs/graphql';
import { KeyValueInput } from 'src/core/models/key-value.dto';

@InputType()
export class UpsertCustomerCodeReferentialInput {
  @Field(() => [KeyValueInput])
  readonly parameters: KeyValueInput[];
}
