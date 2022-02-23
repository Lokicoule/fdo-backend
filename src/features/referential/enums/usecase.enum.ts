import { registerEnumType } from '@nestjs/graphql';

export enum UseCaseParameterAllowed {
  YEAR = 'YEAR',
  COUNTER = 'COUNTER',
  LITERAL_EXPRESSION = 'LITERAL_EXPRESSION',
  ENTITY = 'ENTITY',
}

registerEnumType(UseCaseParameterAllowed, {
  name: 'UseCaseParameterAllowed',
});
