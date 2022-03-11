import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetOrderInput {
  @Field(() => String, { nullable: true })
  readonly _id: string;

  @Field(() => String, { nullable: true })
  readonly code: string;
}
