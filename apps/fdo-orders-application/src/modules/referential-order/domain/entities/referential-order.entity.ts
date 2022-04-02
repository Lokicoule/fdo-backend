import { GqlEntity, UseCaseReferentialEnum } from '@app/fdo-core';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  ParameterReferentialOrder,
  ParameterReferentialOrderSchema,
} from './parameter-referential-order.entity';

@Schema({ timestamps: true })
@ObjectType()
export class ReferentialOrder extends GqlEntity {
  @Field(() => UseCaseReferentialEnum)
  @Prop({ type: String, required: true, uppercase: true, unique: true })
  useCase: UseCaseReferentialEnum;

  @Field(() => [ParameterReferentialOrder], { nullable: true })
  @Prop({
    type: [ParameterReferentialOrderSchema],
  })
  parameters: ParameterReferentialOrder[];
}

export const ReferentialOrderName = 'referential_order';

export type ReferentialOrderDocument = ReferentialOrder & Document;
export const ReferentialOrderSchema =
  SchemaFactory.createForClass(ReferentialOrder);
