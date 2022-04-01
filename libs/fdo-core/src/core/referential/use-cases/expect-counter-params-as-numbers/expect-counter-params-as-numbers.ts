import { ParameterReferentialEnum } from '../../enums/parameter-referential.enum';
import { ParameterType } from '../../types/referentialType';

export function expectCounterParamsAsNumbers<T extends ParameterType>(
  params: T[],
) {
  const counters = params.filter(
    (param) =>
      param?.key.toUpperCase() ===
      ParameterReferentialEnum.COUNTER.toUpperCase(),
  );
  return counters.every((counter) => !isNaN(counter.value));
}
