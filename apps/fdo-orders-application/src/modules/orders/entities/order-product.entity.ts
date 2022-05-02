import { GqlEntity } from '@app/fdo-core';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
@ObjectType()
export class OrderProduct {
  @Field(() => ID)
  @Prop({ type: String, required: true })
  id: string;

  @Field(() => String)
  @Prop({ type: String, required: true, uppercase: true })
  code: string;

  @Field(() => String)
  @Prop({ required: true, uppercase: true })
  label: string;
}

export const OrderProductSchema = SchemaFactory.createForClass(OrderProduct);
