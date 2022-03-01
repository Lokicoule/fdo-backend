import { Field, InputType } from '@nestjs/graphql';
import { UseCaseEnum } from 'src/core/models/enums/usecase.enum';

@InputType()
export class GetReferentialProductInput {
  @Field(() => UseCaseEnum)
  readonly useCase: UseCaseEnum;
}
