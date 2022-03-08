import { UseCaseError } from '../../../../core/errors/use-case.error';
import { ParameterReferentialEnum } from '../../enums/parameter-referential.enum';
import { getUpdatedReferentialByCounterIncrementUseCase } from './get-updated-referential-by-counter-increment';

const PREFIX_VALUE = '__';
const COUNTER_VALUE = 12345;

describe('getUpdatedReferentialByCounterIncrementUseCase', () => {
  it('counter is missing, should throw a UseCaseError', async () => {
    expect(() => {
      getUpdatedReferentialByCounterIncrementUseCase({
        parameters: [
          { key: ParameterReferentialEnum.PREFIX, value: PREFIX_VALUE },
        ],
      });
    }).toThrow(UseCaseError);
  });

  it('invalid counter value, should throw a UseCaseError', async () => {
    expect(() => {
      getUpdatedReferentialByCounterIncrementUseCase(
        {
          parameters: [
            { key: ParameterReferentialEnum.PREFIX, value: PREFIX_VALUE },
            {
              key: ParameterReferentialEnum.COUNTER,
              value: 'invalid',
            },
          ],
        },
        666,
      );
    }).toThrow(UseCaseError);
  });

  it('should return counter incremented by default incrementor (1)', async () => {
    expect(
      getUpdatedReferentialByCounterIncrementUseCase({
        parameters: [
          { key: ParameterReferentialEnum.PREFIX, value: PREFIX_VALUE },
          {
            key: ParameterReferentialEnum.COUNTER,
            value: COUNTER_VALUE.toString(),
          },
        ],
      }),
    ).toStrictEqual({
      parameters: [
        { key: ParameterReferentialEnum.PREFIX, value: PREFIX_VALUE },
        {
          key: ParameterReferentialEnum.COUNTER,
          value: (COUNTER_VALUE + 1).toString(),
        },
      ],
    });
  });

  it('should return counter incremented by argument incrementor (666) ', async () => {
    expect(
      getUpdatedReferentialByCounterIncrementUseCase(
        {
          parameters: [
            { key: ParameterReferentialEnum.PREFIX, value: PREFIX_VALUE },
            {
              key: ParameterReferentialEnum.COUNTER,
              value: COUNTER_VALUE.toString(),
            },
          ],
        },
        666,
      ),
    ).toStrictEqual({
      parameters: [
        { key: ParameterReferentialEnum.PREFIX, value: PREFIX_VALUE },
        {
          key: ParameterReferentialEnum.COUNTER,
          value: (COUNTER_VALUE + 666).toString(),
        },
      ],
    });
  });

  it('implicit type conversion, should return counter incremented by default incrementor (1) ', async () => {
    expect(
      getUpdatedReferentialByCounterIncrementUseCase({
        parameters: [
          { key: ParameterReferentialEnum.PREFIX, value: PREFIX_VALUE },
          {
            key: ParameterReferentialEnum.COUNTER,
            value: COUNTER_VALUE,
          },
        ],
      }),
    ).toStrictEqual({
      parameters: [
        { key: ParameterReferentialEnum.PREFIX, value: PREFIX_VALUE },
        {
          key: ParameterReferentialEnum.COUNTER,
          value: (COUNTER_VALUE + 1).toString(),
        },
      ],
    });
  });
  it('counter is missing, should throw a UseCaseError', async () => {
    expect(() => {
      getUpdatedReferentialByCounterIncrementUseCase({
        parameters: [
          { key: ParameterReferentialEnum.PREFIX, value: PREFIX_VALUE },
        ],
      });
    }).toThrow(UseCaseError);
  });

  it('invalid counter value, should throw a UseCaseError', async () => {
    expect(() => {
      getUpdatedReferentialByCounterIncrementUseCase(
        {
          parameters: [
            { key: ParameterReferentialEnum.PREFIX, value: PREFIX_VALUE },
            {
              key: ParameterReferentialEnum.COUNTER,
              value: 'invalid',
            },
          ],
        },
        666,
      );
    }).toThrow(UseCaseError);
  });
});
