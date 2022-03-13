import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { GqlEntity } from 'src/core/models/entity/entity.graphql';
import { Product } from 'src/features/products/entities/product.entity';

@Schema()
@ObjectType()
export class OrderItem extends GqlEntity {
  @Field(() => Product, { nullable: true })
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: Product.name,
    required: true,
  })
  product: MongooseSchema.Types.ObjectId | Product;

  @Field(() => Number)
  @Prop({ required: true })
  amount: number;

  @Field(() => Number)
  @Prop({ required: true })
  unitPrice: number;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);
