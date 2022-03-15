import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { addDays } from 'src/core/helpers/date.helpers';
import { GqlEntity } from 'src/core/models/entity/entity.graphql';
import { Customer } from 'src/features/customers/entities/customer.entity';
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

  @Field(() => Customer)
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: Customer.name,
    required: true,
  })
  customer: Customer;

  @Field(() => [OrderItem], { nullable: true })
  @Prop({
    type: [OrderItemSchema],
  })
  items: OrderItem[];
}

export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order);
