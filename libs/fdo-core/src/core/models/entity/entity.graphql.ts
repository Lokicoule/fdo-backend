import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GqlEntity {
  @Field(() => ID, { name: 'id' })
  readonly _id: string;

  @Field(() => Date, { nullable: true })
  readonly createdAt: Date;

  @Field(() => Date, { nullable: true })
  readonly updatedAt: Date;
}
