import {
  UniqueKeyRule,
  ParamsContainsKeysRule,
  ParameterReferentialEnum,
  CountersValuesAreNumbersRule,
} from '@app/fdo-core';
import { applyDecorators } from '@nestjs/common';

export function CodeGeneratorParamsRule() {
  return applyDecorators(
    UniqueKeyRule({ message: 'Key parameter should be unique.' }),
    ParamsContainsKeysRule([ParameterReferentialEnum.COUNTER], {
      message: 'Key counter should be present in payload.',
    }),
    CountersValuesAreNumbersRule(),
  );
}
