import { Field, InputType } from '@nestjs/graphql';
import { UseCaseReferentialEnum } from 'src/features-referential/core/enums/usecase-referential.enum';
import { CodeGeneratorParamsRule } from '../validators/code-generator-params.decorator';
import { ParameterReferentialOrderInput } from './parameter-referential-order.input';

@InputType()
export class CreateReferentialOrderInput {
  @Field(() => UseCaseReferentialEnum)
  readonly useCase: UseCaseReferentialEnum;

  @Field(() => [ParameterReferentialOrderInput])
  @CodeGeneratorParamsRule()
  readonly parameters: ParameterReferentialOrderInput[];
}
