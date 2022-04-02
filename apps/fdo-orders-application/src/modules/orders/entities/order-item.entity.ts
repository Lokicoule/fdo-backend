import { GqlEntity } from '@app/fdo-core';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { OrderProduct, OrderProductSchema } from './order-product.entity';

@Schema()
@ObjectType()
export class OrderItem extends GqlEntity {
  @Field(() => OrderProduct, { nullable: true })
  @Prop({
    type: OrderProductSchema,
    required: true,
  })
  product: OrderProduct;

  @Field(() => Number)
  @Prop({ required: true })
  amount: number;

  @Field(() => Number)
  @Prop({ required: true })
  unitPrice: number;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);
