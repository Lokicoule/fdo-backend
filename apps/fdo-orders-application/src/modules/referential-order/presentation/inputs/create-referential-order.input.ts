import { UseCaseReferentialEnum } from '@app/fdo-core';
import { Field, InputType } from '@nestjs/graphql';
import { CodeGeneratorParamsRule } from '../validators/code-generator-params.decorator';
import { CreateParameterReferentialOrderInput } from './create-parameter-referential-order.input';

@InputType()
export class CreateReferentialOrderInput {
  @Field(() => UseCaseReferentialEnum)
  readonly useCase: UseCaseReferentialEnum;

  @Field(() => [CreateParameterReferentialOrderInput])
  @CodeGeneratorParamsRule()
  readonly parameters: CreateParameterReferentialOrderInput[];
}
