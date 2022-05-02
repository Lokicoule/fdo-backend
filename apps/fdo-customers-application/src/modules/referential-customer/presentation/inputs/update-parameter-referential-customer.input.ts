import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateParameterReferentialCustomerInput } from './create-parameter-referential-customer.input';

@InputType()
export class UpdateParameterReferentialCustomerInput extends PartialType(
  CreateParameterReferentialCustomerInput,
) {
  @Field(() => ID)
  readonly id: string;
}
