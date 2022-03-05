import { Field, InputType } from '@nestjs/graphql';
import { UseCaseReferentialEnum } from 'src/features/referential/enums/usecase-referential.enum';

@InputType()
export class GetReferentialCustomerInput {
  @Field(() => UseCaseReferentialEnum)
  readonly useCase: UseCaseReferentialEnum;
}
