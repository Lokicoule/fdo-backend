import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RemoveProductsInput {
  @Field(() => [String])
  readonly ids: string[];
}
