import { Type } from '@nestjs/common';
import { Field, InputType } from '@nestjs/graphql';
import { IKeyValue } from './key-value.interface';

export function createKeyValueInput<T>(entityType: any): Type<IKeyValue<T>> {
  @InputType({ isAbstract: true })
  class KeyValueInputHost implements IKeyValue<T> {
    @Field(() => entityType)
    key: T;

    @Field(() => String)
    value: string;
  }

  return KeyValueInputHost;
}
