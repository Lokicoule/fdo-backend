import { Type } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { IKeyValue } from './key-value.interface';

export function createKeyValueEntity<T>(entityType: any): Type<IKeyValue<T>> {
  @Schema({ _id: false })
  @ObjectType({ isAbstract: true })
  class KeyValueEntityHost implements IKeyValue<T> {
    @Field(() => entityType, { nullable: false })
    @Prop({ type: String, required: true, uppercase: true })
    key: T;

    @Field(() => String)
    @Prop({ type: String, required: true, uppercase: true })
    value: string;
  }

  return KeyValueEntityHost;
}
