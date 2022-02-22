import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field(() => String)
  readonly code: string;

  @Field(() => String)
  readonly naming: string;

  @Field(() => String)
  readonly address: string;

  @Field(() => String)
  readonly zipCode: string;

  @Field(() => String)
  readonly city: string;
}
