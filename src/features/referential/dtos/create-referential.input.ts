import { Field, InputType } from '@nestjs/graphql';
import { UseCasesRules } from '../decorators/use-cases-rules.decorator';
import { ReferentialParameterInput } from './referential-parameter.input';

@InputType()
export class CreateReferentialInput {
  @Field(() => String)
  readonly code: string;

  @Field(() => [ReferentialParameterInput])
  @UseCasesRules()
  readonly parameters?: ReferentialParameterInput[];
}
