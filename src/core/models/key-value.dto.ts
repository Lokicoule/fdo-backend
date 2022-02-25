import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class KeyValueInput {
  @Field(() => String, { nullable: false })
  key: string;

  @Field(() => String)
  value: string;
}
