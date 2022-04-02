import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class OrderProductInput {
  @Field(() => String)
  readonly code: string;

  @Field(() => String)
  readonly label: string;
}
