import { UseCaseReferentialEnum } from '@app/fdo-core';
import { Field, InputType } from '@nestjs/graphql';
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
