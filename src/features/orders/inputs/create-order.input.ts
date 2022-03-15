import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { OrderItemInput } from './order-item.input';

@InputType()
export class CreateOrderInput {
  @Field(() => String, { nullable: true })
  readonly code: string;

  @Field(() => Date, { nullable: true })
  readonly billingDate: Date;

  @Field(() => Date, { nullable: true })
  readonly dueDate: Date;

  @Field(() => String)
  readonly customer: MongooseSchema.Types.ObjectId;

  @Field(() => [OrderItemInput], { nullable: true })
  readonly items: OrderItemInput[];
}
