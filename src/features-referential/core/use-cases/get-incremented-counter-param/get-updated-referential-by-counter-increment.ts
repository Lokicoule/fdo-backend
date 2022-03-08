import { UseCaseError } from '../../../../core/errors/use-case.error';
import { ParameterReferentialEnum } from '../../enums/parameter-referential.enum';
import { ReferentialType } from '../../types/referentialType';

export function getUpdatedReferentialByCounterIncrementUseCase<
  T extends ReferentialType,
>(referential: T, incrementor = 1): T {
  const { parameters, ...others } = referential;
  const counterIdx = parameters.findIndex(
    (param) => param.key === ParameterReferentialEnum.COUNTER,
  );
  if (counterIdx === -1) throw new UseCaseError(`Missing counter parameter.`);

  const { key, value } = parameters[counterIdx];

  if (isNaN(value)) throw new UseCaseError('Counter value should be a number');

  parameters[counterIdx] = {
    key,
    value: (parseInt(value) + incrementor).toString(),
  };
  return {
    parameters,
    ...others,
  } as T;
}
