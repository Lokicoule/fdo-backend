import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
@ObjectType()
export class KeyValue<T> {
  @Field(() => String, { nullable: false })
  @Prop({ type: String, required: true, uppercase: true })
  key: T;

  @Field(() => String)
  @Prop({ type: String, required: true, uppercase: true })
  value: string;
}

export const KeyValueSchema = SchemaFactory.createForClass(KeyValue);
