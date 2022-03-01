import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RemoveCustomersInput {
  @Field(() => [String])
  readonly ids: string[];
}
