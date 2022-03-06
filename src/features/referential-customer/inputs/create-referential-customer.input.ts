import { Field, InputType } from '@nestjs/graphql';
import { UseCaseReferentialEnum } from 'src/features/referential/enums/usecase-referential.enum';
import { CodeGeneratorParamsRule } from '../validators/code-generator-params.decorator';
import { ParameterReferentialCustomerInput } from './parameter-referential-customer.input';

@InputType()
export class CreateReferentialCustomerInput {
  @Field(() => UseCaseReferentialEnum)
  readonly useCase: UseCaseReferentialEnum;

  @Field(() => [ParameterReferentialCustomerInput])
  @CodeGeneratorParamsRule()
  readonly parameters: ParameterReferentialCustomerInput[];
}
