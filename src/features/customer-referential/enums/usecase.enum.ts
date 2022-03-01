import { registerEnumType } from '@nestjs/graphql';

export enum UseCaseEnum {
  CODE_GENERATOR = 'CODE_GENERATOR',
}

registerEnumType(UseCaseEnum, {
  name: 'UseCaseEnum',
});
