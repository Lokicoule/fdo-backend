import { UseCaseReferentialEnum } from '@app/fdo-core';
import { Field, InputType } from '@nestjs/graphql';
import { CodeGeneratorParamsRule } from '../validators/code-generator-params.decorator';
import { CreateParameterReferentialProductInput } from './create-parameter-referential-product.input';

@InputType()
export class CreateReferentialProductInput {
  @Field(() => UseCaseReferentialEnum)
  readonly useCase: UseCaseReferentialEnum;

  @Field(() => [CreateParameterReferentialProductInput])
  @CodeGeneratorParamsRule()
  readonly parameters: CreateParameterReferentialProductInput[];
}
