import { UseCaseError } from '../../../../core/errors/use-case.error';
import { ParameterReferentialEnum } from '../../enums/parameter-referential.enum';
import { generateCodeFromParamsUseCase } from './generate-code-from-params';

const PREFIX_VALUE = '__';
const COUNTER_VALUE = '12345';
const SUFFIX_VALUE = 'CL';

describe('generateCodeFromParamsUseCase', () => {
  it('null params, should throw a UseCaseError', async () => {
    expect(() => {
      generateCodeFromParamsUseCase(null);
    }).toThrow(UseCaseError);
  });
  it('not supported key, should throw a UseCaseError', async () => {
    expect(() => {
      generateCodeFromParamsUseCase([{ key: 'toto', value: 'toto' }]);
    }).toThrow(UseCaseError);
  });
  it('prefix key, should return prefix value', async () => {
    expect(
      generateCodeFromParamsUseCase([
        { key: ParameterReferentialEnum.PREFIX, value: PREFIX_VALUE },
        { key: 'toto', value: 'toto' },
      ]),
    ).toBe(PREFIX_VALUE);
  });
  it('prefix & suffix keys, should return concatenated prefix & suffix values', async () => {
    expect(
      generateCodeFromParamsUseCase([
        { key: ParameterReferentialEnum.PREFIX, value: PREFIX_VALUE },
        { key: ParameterReferentialEnum.SUFFIX, value: SUFFIX_VALUE },
      ]),
    ).toBe(PREFIX_VALUE + SUFFIX_VALUE);
  });
  it('prefix, counter & suffix keys, should return concatenated prefix, counter & suffix values', async () => {
    expect(
      generateCodeFromParamsUseCase([
        { key: ParameterReferentialEnum.PREFIX, value: PREFIX_VALUE },
        { key: ParameterReferentialEnum.SUFFIX, value: SUFFIX_VALUE },
        { key: ParameterReferentialEnum.COUNTER, value: COUNTER_VALUE },
      ]),
    ).toBe(PREFIX_VALUE + COUNTER_VALUE + SUFFIX_VALUE);
  });
  it('two prefixes & counter keys, should return concatenated prefix & counter values', async () => {
    expect(
      generateCodeFromParamsUseCase([
        { key: ParameterReferentialEnum.PREFIX, value: PREFIX_VALUE },
        { key: ParameterReferentialEnum.PREFIX, value: PREFIX_VALUE },
        { key: ParameterReferentialEnum.COUNTER, value: '12345' },
      ]),
    ).toBe(PREFIX_VALUE + COUNTER_VALUE);
  });
});
