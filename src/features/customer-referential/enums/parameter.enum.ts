import { registerEnumType } from '@nestjs/graphql';

export enum ParameterEnum {
  COUNTER = 'COUNTER',
  PREFIX = 'PREFIX',
  SUFFIX = 'SUFFIX',
}

registerEnumType(ParameterEnum, {
  name: 'ParameterEnum',
});
