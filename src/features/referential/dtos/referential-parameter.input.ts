import { Field, InputType } from '@nestjs/graphql';
import { UseCaseParameterAllowed } from '../enums/usecase.enum';

@InputType()
export class ReferentialParameterInput {
  @Field(() => String)
  readonly key: string;

  @Field(() => String)
  readonly value: string;

  @Field(() => UseCaseParameterAllowed, { nullable: true })
  readonly useCase?: UseCaseParameterAllowed;
}
