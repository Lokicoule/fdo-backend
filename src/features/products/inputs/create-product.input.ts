import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String, { nullable: true })
  readonly code?: string;

  @Field(() => String)
  readonly label: string;
}
