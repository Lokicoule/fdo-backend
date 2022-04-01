import { GqlEntity, UseCaseReferentialEnum } from '@app/fdo-core';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  ParameterReferentialProduct,
  ParameterReferentialProductSchema,
} from './parameter-referential-product.entity';

@Schema({ timestamps: true })
@ObjectType()
export class ReferentialProduct extends GqlEntity {
  @Field(() => UseCaseReferentialEnum)
  @Prop({ type: String, required: true, uppercase: true, unique: true })
  useCase: UseCaseReferentialEnum;

  @Field(() => [ParameterReferentialProduct], { nullable: true })
  @Prop({
    type: [ParameterReferentialProductSchema],
  })
  parameters: ParameterReferentialProduct[];
}

export const ReferentialProductName = 'referential_product';

export type ReferentialProductDocument = ReferentialProduct & Document;
export const ReferentialProductSchema =
  SchemaFactory.createForClass(ReferentialProduct);
