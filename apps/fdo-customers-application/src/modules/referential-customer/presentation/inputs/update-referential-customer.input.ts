import { Field, ID, InputType, OmitType } from '@nestjs/graphql';
import { CodeGeneratorParamsRule } from '../validators/code-generator-params.decorator';
import { CreateReferentialCustomerInput } from './create-referential-customer.input';
import { UpdateParameterReferentialCustomerInput } from './update-parameter-referential-customer.input';

@InputType()
export class UpdateReferentialCustomerInput extends OmitType(
  CreateReferentialCustomerInput,
  ['parameters'],
) {
  @Field(() => ID)
  readonly id: string;

  @Field(() => [UpdateParameterReferentialCustomerInput])
  @CodeGeneratorParamsRule()
  readonly parameters: UpdateParameterReferentialCustomerInput[];
}
