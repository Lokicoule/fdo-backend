import { Field, InputType } from '@nestjs/graphql';
import { UseCase } from '../enums/usecase.enum';

@InputType()
export class GetReferentialCustomerInput {
  @Field(() => UseCase)
  readonly useCase?: UseCase;
}
