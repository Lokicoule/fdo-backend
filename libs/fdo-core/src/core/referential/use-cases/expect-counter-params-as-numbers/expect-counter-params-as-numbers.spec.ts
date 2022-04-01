import { ParameterReferentialEnum } from '../../enums/parameter-referential.enum';
import { expectCounterParamsAsNumbers } from './expect-counter-params-as-numbers';

describe('generateCodeFromParamsUseCase', () => {
  it('no counter param, should return true', async () => {
    expect(expectCounterParamsAsNumbers([{ key: 'toto', value: 'toto' }])).toBe(
      true,
    );
  });
  it('counter param, should return true', async () => {
    expect(
      expectCounterParamsAsNumbers([
        { key: ParameterReferentialEnum.COUNTER, value: '12345' },
      ]),
    ).toBe(true);
  });
  it('invalid counter param, should return false', async () => {
    expect(
      expectCounterParamsAsNumbers([
        { key: ParameterReferentialEnum.COUNTER, value: 'a12345' },
      ]),
    ).toBe(false);
  });
});
