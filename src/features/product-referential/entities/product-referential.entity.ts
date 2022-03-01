import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  KeyValue,
  KeyValueSchema,
} from 'src/core/models/key-value/key-value.entity';
import { UseCaseEnum } from 'src/core/models/enums/usecase.enum';

@Schema({ timestamps: true })
@ObjectType()
export class ProductReferential {
  @Field(() => UseCaseEnum)
  @Prop({ type: String, required: true, uppercase: true, unique: true })
  useCase: UseCaseEnum;

  @Field(() => [KeyValue])
  @Prop({
    type: [KeyValueSchema],
  })
  parameters: KeyValue[];
}

export const ProductReferentialName = 'product_referential';

export type ProductReferentialDocument = ProductReferential & Document;
export const ProductReferentialSchema =
  SchemaFactory.createForClass(ProductReferential);
