import { Field, InputType } from '@nestjs/graphql';
import { UseCaseReferentialEnum } from 'src/features-referential/core/enums/usecase-referential.enum';
import { CodeGeneratorParamsRule } from '../validators/code-generator-params.decorator';
import { ParameterReferentialProductInput } from './parameter-referential-product.input';

@InputType()
export class CreateReferentialProductInput {
  @Field(() => UseCaseReferentialEnum)
  readonly useCase: UseCaseReferentialEnum;

  @Field(() => [ParameterReferentialProductInput])
  @CodeGeneratorParamsRule()
  readonly parameters: ParameterReferentialProductInput[];
}