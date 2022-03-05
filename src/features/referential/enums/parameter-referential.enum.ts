import { registerEnumType } from '@nestjs/graphql';

export enum ParameterReferentialEnum {
  COUNTER = 'COUNTER',
  PREFIX = 'PREFIX',
  SUFFIX = 'SUFFIX',
}

export type ParameterReferentialEnumType =
  keyof typeof ParameterReferentialEnum;

registerEnumType(ParameterReferentialEnum, {
  name: 'ParameterReferentialEnum',
});
