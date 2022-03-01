import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ParameterEnum } from '../enums/parameter.enum';
import { UseCaseEnum } from '../enums/usecase.enum';
import { KeyValue, KeyValueSchema } from './key-value.entity';

@Schema({ timestamps: true })
@ObjectType()
export class CustomerReferential {
  @Field(() => UseCaseEnum)
  @Prop({ type: String, required: true, uppercase: true, unique: true })
  useCase: UseCaseEnum;

  @Field(() => [KeyValue])
  @Prop({
    type: [KeyValueSchema],
  })
  parameters: KeyValue[];
}

export const CustomerReferentialName = 'customer_referential';

export type CustomerReferentialDocument = CustomerReferential & Document;
export const CustomerReferentialSchema =
  SchemaFactory.createForClass(CustomerReferential);
