import { Type } from '@nestjs/common';
import { Field, InputType } from '@nestjs/graphql';

export interface IKeyValueInput<T> {
  key: T;
  value: string;
}

export function KeyValueInput<T>(entityType: any): Type<IKeyValueInput<T>> {
  @InputType({ isAbstract: true })
  class KeyValueInputHost implements IKeyValueInput<T> {
    @Field(() => entityType)
    key: T;

    @Field(() => String)
    value: string;
  }

  return KeyValueInputHost;
}
