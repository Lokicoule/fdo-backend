import { GqlEntity } from '@app/fdo-core';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
@ObjectType()
export class Product extends GqlEntity {
  @Field(() => String)
  @Prop({ type: String, required: true, uppercase: true, unique: true })
  code: string;

  @Field(() => String)
  @Prop({ required: true, uppercase: true })
  label: string;
}

export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product);
