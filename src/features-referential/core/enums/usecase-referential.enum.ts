import { registerEnumType } from '@nestjs/graphql';

export enum UseCaseReferentialEnum {
  CODE_GENERATOR = 'CODE_GENERATOR',
}

export type ReferentialUseCaseEnumType = keyof typeof UseCaseReferentialEnum;

registerEnumType(UseCaseReferentialEnum, {
  name: 'UseCaseReferentialEnum',
});
