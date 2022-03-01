import { map, MonoTypeOperatorFunction, retryWhen, scan } from 'rxjs';
import { getValue } from 'src/core/helpers/string.helper';
import { ParameterEnum } from 'src/core/models/enums/parameter.enum';
import { KeyValue } from 'src/core/models/key-value/key-value.entity';
import { CustomerReferential } from 'src/features/customer-referential/entities/customer-referential.entity';

export function counterParameterUseCase(
  customerReferential: CustomerReferential,
  incrementor = 1,
): CustomerReferential {
  const { useCase, parameters } = customerReferential;
  const counterIdx = parameters.findIndex(
    (param) => param.key === ParameterEnum.COUNTER,
  );
  if (counterIdx === -1)
    throw new Error(
      'Missing counter parameter in customer_referential document.',
    );
  const { key, value } = parameters[counterIdx];
  parameters[counterIdx] = {
    key,
    value: (parseInt(value) + incrementor).toString(),
  };
  return {
    useCase,
    parameters,
  };
}

export function codeGenerationUseCase(parameters: KeyValue[]) {
  const prefixParameter = parameters.find(
    (param) => param.key === ParameterEnum.PREFIX,
  );
  const counterParameter = parameters.find(
    (param) => param.key === ParameterEnum.COUNTER,
  );
  const suffixParameter = parameters.find(
    (param) => param.key === ParameterEnum.SUFFIX,
  );
  const code = `${getValue(prefixParameter?.value)}${getValue(
    counterParameter?.value,
  )}${getValue(suffixParameter?.value)}`;
  if (!code) throw new Error("Service error: generated code cant't be null.");

  return code;
}

export function retryWhenCodeAlreadyExist<T>(
  count = 1,
): MonoTypeOperatorFunction<T> {
  return (input) =>
    input.pipe(
      retryWhen((errors) =>
        errors.pipe(
          scan((acc, error) => ({ count: acc.count + 1, error }), {
            count: 0,
            error: Error,
          }),
          map((current) => {
            if (current.error.code === 11000) {
              if (current.count < count) return current;
              throw new Error(
                'Counter integrity failure. Try again to correct.',
              );
            }
            throw current.error;
          }),
        ),
      ),
    );
}
