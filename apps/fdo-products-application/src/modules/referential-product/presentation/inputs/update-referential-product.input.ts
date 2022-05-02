import { Field, ID, InputType, OmitType } from '@nestjs/graphql';
import { CodeGeneratorParamsRule } from '../validators/code-generator-params.decorator';
import { CreateReferentialProductInput } from './create-referential-product.input';
import { UpdateParameterReferentialProductInput } from './update-parameter-referential-product.input';

@InputType()
export class UpdateReferentialProductInput extends OmitType(
  CreateReferentialProductInput,
  ['parameters'],
) {
  @Field(() => ID)
  readonly id: string;

  @Field(() => [UpdateParameterReferentialProductInput])
  @CodeGeneratorParamsRule()
  readonly parameters: UpdateParameterReferentialProductInput[];
}
