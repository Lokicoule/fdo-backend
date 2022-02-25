import { registerEnumType } from '@nestjs/graphql';

export enum UseCase {
  CODE_GENERATOR = 'CODE_GENERATOR',
}

registerEnumType(UseCase, {
  name: 'UseCase',
});
