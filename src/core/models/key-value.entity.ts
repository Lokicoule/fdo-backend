import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
@ObjectType()
export class KeyValue {
  @Field(() => String, { nullable: false })
  @Prop({ required: true, uppercase: true })
  key: string;

  @Field(() => String)
  @Prop({ required: true, uppercase: true })
  value: string;
}

export const KeyValueSchema = SchemaFactory.createForClass(KeyValue);
