import { Field, InputType } from '@nestjs/graphql';
import { UseCaseReferentialEnum } from 'src/features-referential/core/enums/usecase-referential.enum';
import { ParameterReferentialProductInput } from './parameter-referential-product.input';

@InputType()
export class CreateReferentialProductInput {
  @Field(() => UseCaseReferentialEnum)
  readonly useCase: UseCaseReferentialEnum;

  @Field(() => [ParameterReferentialProductInput])
  readonly parameters: ParameterReferentialProductInput[];
}
