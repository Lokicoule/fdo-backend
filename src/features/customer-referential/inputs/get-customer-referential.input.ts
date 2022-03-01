import { Field, InputType } from '@nestjs/graphql';
import { UseCaseEnum } from '../enums/usecase.enum';

@InputType()
export class GetReferentialCustomerInput {
  @Field(() => UseCaseEnum)
  readonly useCase: UseCaseEnum;
}
