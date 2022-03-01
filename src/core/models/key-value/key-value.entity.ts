import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ParameterEnum } from '../enums/parameter.enum';

@Schema({ _id: false })
@ObjectType()
export class KeyValue {
  @Field(() => ParameterEnum, { nullable: false })
  @Prop({ type: String, required: true, uppercase: true })
  key: ParameterEnum;

  @Field(() => String)
  @Prop({ type: String, required: true, uppercase: true })
  value: string;
}

export const KeyValueSchema = SchemaFactory.createForClass(KeyValue);
