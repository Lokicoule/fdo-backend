import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GqlEntity } from 'src/core/models/entity/entity.graphql';
import { OrderItem, OrderItemSchema } from './order-item.entity';

@Schema({ timestamps: true })
@ObjectType()
export class Order extends GqlEntity {
  @Field(() => String)
  @Prop({ type: String, required: true, uppercase: true, unique: true })
  code: string;

  @Field(() => Date, { nullable: true })
  @Prop(() => Date)
  billingDate: Date;

  @Field(() => Date, { nullable: true })
  @Prop(() => Date)
  dueDate: Date;

  @Field(() => [OrderItem], { nullable: true })
  @Prop({
    type: [OrderItemSchema],
  })
  items: OrderItem[];
}

export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order);
