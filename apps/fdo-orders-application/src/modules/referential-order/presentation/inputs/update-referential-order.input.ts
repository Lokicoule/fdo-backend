import { Field, ID, InputType, OmitType } from '@nestjs/graphql';
import { CodeGeneratorParamsRule } from '../validators/code-generator-params.decorator';
import { CreateReferentialOrderInput } from './create-referential-order.input';
import { UpdateParameterReferentialOrderInput } from './update-parameter-referential-order.input';

@InputType()
export class UpdateReferentialOrderInput extends OmitType(
  CreateReferentialOrderInput,
  ['parameters'],
) {
  @Field(() => ID)
  readonly id: string;

  @Field(() => [UpdateParameterReferentialOrderInput])
  @CodeGeneratorParamsRule()
  readonly parameters: UpdateParameterReferentialOrderInput[];
}
