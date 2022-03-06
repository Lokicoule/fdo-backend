import { applyDecorators } from '@nestjs/common';
import { ParameterReferentialEnum } from 'src/features/referential/enums/parameter-referential.enum';
import { CounterKeyParamRule } from 'src/features/referential/validators/counter-key-param/counter-key-param.decorator';
import { UniqueKeyRule } from 'src/features/referential/validators/unique-key-param/unique-key-param.decorator';
import { ExistsKeyParamRule } from '../../referential/validators/exists-key-param/exists-key-param.decorator';

export function CodeGeneratorParamsRule() {
  return applyDecorators(
    UniqueKeyRule({ message: 'Key parameter should be unique.' }),
    ExistsKeyParamRule(
      [ParameterReferentialEnum.COUNTER, ParameterReferentialEnum.SUFFIX],
      { message: 'Key counter and suffix should be present in payload.' },
    ),
    CounterKeyParamRule(),
  );
}
