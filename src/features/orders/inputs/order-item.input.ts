import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class OrderItemInput {
  @Field(() => String)
  readonly product: MongooseSchema.Types.ObjectId;

  @Field(() => Number)
  readonly amount: number;

  @Field(() => Number)
  readonly unitPrice: number;
}
