import { Field, InputType } from '@nestjs/graphql';
import { UseCaseReferentialEnum } from 'src/features/referential/enums/usecase-referential.enum';
import { ParameterReferentialCustomerInput } from './parameter-referential-customer.input';

@InputType()
export class CreateReferentialCustomerInput {
  @Field(() => UseCaseReferentialEnum)
  readonly useCase: UseCaseReferentialEnum;

  @Field(() => [ParameterReferentialCustomerInput])
  readonly parameters: ParameterReferentialCustomerInput[];
}
