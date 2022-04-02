import { GqlEntity } from '@app/fdo-core';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class OrderCustomer extends GqlEntity {
  @Field(() => String)
  @Prop({ type: String, required: true, uppercase: true, unique: true })
  code: string;

  @Field(() => String)
  @Prop({ required: true, uppercase: true })
  naming: string;

  @Field(() => String)
  @Prop({ required: true })
  address: string;

  @Field(() => String)
  @Prop({ required: true, match: /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/ })
  zipCode: string;

  @Field(() => String)
  @Prop({ required: true, uppercase: true })
  city: string;
}

export const OrderCustomerSchema = SchemaFactory.createForClass(OrderCustomer);
