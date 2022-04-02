import { GqlEntity } from '@app/fdo-core';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class OrderProduct extends GqlEntity {
  @Field(() => String)
  @Prop({ type: String, required: true, uppercase: true, unique: true })
  code: string;

  @Field(() => String)
  @Prop({ required: true, uppercase: true })
  label: string;
}

export const OrderProductSchema = SchemaFactory.createForClass(OrderProduct);
