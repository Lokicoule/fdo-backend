import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { KeyValue, KeyValueSchema } from 'src/core/models/key-value.entity';
import { UseCase } from '../enums/usecase.enum';

@Schema({ timestamps: true })
@ObjectType()
export class CustomerReferential {
  @Field(() => UseCase)
  @Prop({ type: String, required: true, uppercase: true, unique: true })
  useCase: UseCase;

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
