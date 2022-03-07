import { applyDecorators } from '@nestjs/common';
import { ParameterReferentialEnum } from 'src/features-referential/core/enums/parameter-referential.enum';
import { CountersValuesAreNumbersRule } from 'src/features-referential/core/validators/counters-values-are-numbers/counters-values-are-numbers.decorator';
import { UniqueKeyRule } from 'src/features-referential/core/validators/unique-key-param/unique-key-param.decorator';
import { ParamsContainsKeysRule } from '../../core/validators/params-contains-keys/params-contains-keys.decorator';

export function CodeGeneratorParamsRule() {
  return applyDecorators(
    UniqueKeyRule({ message: 'Key parameter should be unique.' }),
    ParamsContainsKeysRule([ParameterReferentialEnum.COUNTER], {
      message: 'Key counter should be present in payload.',
    }),
    CountersValuesAreNumbersRule(),
  );
}
