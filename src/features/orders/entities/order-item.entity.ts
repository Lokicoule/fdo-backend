import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Product } from 'src/features/products/entities/product.entity';

@Schema({ _id: false })
@ObjectType()
export class OrderItem {
  @Field(() => Product)
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
