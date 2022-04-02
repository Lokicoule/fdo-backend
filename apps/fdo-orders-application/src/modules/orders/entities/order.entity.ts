import { addDays, GqlEntity } from '@app/fdo-core';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { OrderCustomer, OrderCustomerSchema } from './order-customer.entity';
import { OrderItem, OrderItemSchema } from './order-item.entity';

@Schema({ timestamps: true })
@ObjectType()
export class Order extends GqlEntity {
  @Field(() => String)
  @Prop({ type: String, required: true, uppercase: true, unique: true })
  code: string;

  @Field(() => Date, { nullable: true })
  @Prop({ type: Date, default: Date.now })
  billingDate: Date;

  @Field(() => Date, { nullable: true })
  @Prop({
    type: Date,
    default: () => addDays(new Date(), 30),
  })
  dueDate: Date;

  @Field(() => OrderCustomer)
  @Prop({
    type: OrderCustomerSchema,
    required: true,
  })
  customer: OrderCustomer;

  @Field(() => [OrderItem], { nullable: true })
  @Prop({
    type: [OrderItemSchema],
  })
  items: OrderItem[];
}

export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order);
