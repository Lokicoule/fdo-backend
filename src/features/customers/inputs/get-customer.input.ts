import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetCustomerInput {
  @Field(() => String, { nullable: true })
  readonly id: string;

  @Field(() => String, { nullable: true })
  readonly code: string;
}
