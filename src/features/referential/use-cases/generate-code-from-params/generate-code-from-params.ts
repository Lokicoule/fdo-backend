import { UseCaseError } from 'src/core/errors/use-case.error';
import { getValue } from 'src/core/helpers/string.helper';
import { KeyValue } from 'src/core/models/key-value/key-value.entity';
import { ParameterReferentialEnum } from '../../enums/parameter-referential.enum';
import { isEmpty } from 'lodash';

export function generateCodeFromParamsUseCase(
  parameters: KeyValue<ParameterReferentialEnum>[],
): string {
  if (isEmpty(parameters)) throw new UseCaseError("Parameters can't be empty.");

  const prefixParameter = parameters.find(
    (param) => param.key === ParameterReferentialEnum.PREFIX,
  );
  const counterParameter = parameters.find(
    (param) => param.key === ParameterReferentialEnum.COUNTER,
  );
  const suffixParameter = parameters.find(
    (param) => param.key === ParameterReferentialEnum.SUFFIX,
  );
  const code = `${getValue(prefixParameter?.value)}${getValue(
    counterParameter?.value,
  )}${getValue(suffixParameter?.value)}`;

  if (!code) throw new UseCaseError("generated code cant't be null.");

  return code;
}
