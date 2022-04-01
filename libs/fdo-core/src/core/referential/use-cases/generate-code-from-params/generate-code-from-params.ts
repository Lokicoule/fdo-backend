import { isEmpty } from 'lodash';
import { UseCaseError } from '../../../../core/errors/use-case.error';
import { getValue } from '../../../utils/string.util';
import { ParameterReferentialEnum } from '../../enums/parameter-referential.enum';
import { ParameterType } from '../../types/referentialType';

export function generateCodeFromParamsUseCase<T extends ParameterType>(
  parameters: T[],
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
