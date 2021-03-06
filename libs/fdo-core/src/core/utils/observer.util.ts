import { map, MonoTypeOperatorFunction, retryWhen, scan } from 'rxjs';
import { MongoDBErrorEnum } from '../errors/enums/mongodb.enum';
import { TechnicalError } from '../errors/technical.error';

type RetryParameters = {
  maxRetryAttempts?: number;
  allowedStatusCodes?: number[];
};

export const retryWhenDuplicate = <T>({
  maxRetryAttempts = 10,
  allowedStatusCodes = [MongoDBErrorEnum.CODE_DUPLICATION_ERROR],
}: RetryParameters = {}): MonoTypeOperatorFunction<T> =>
  genericRetryWhen({
    maxRetryAttempts,
    allowedStatusCodes,
  });

export function genericRetryWhen<T>({
  maxRetryAttempts = 3,
  allowedStatusCodes = [],
}: RetryParameters = {}): MonoTypeOperatorFunction<T> {
  return (input) =>
    input.pipe(
      retryWhen((errors) =>
        errors.pipe(
          scan((acc, error) => ({ count: acc.count + 1, error }), {
            count: 0,
            error: Error,
          }),
          map(({ count, error }) => {
            console.log(error);
            if (allowedStatusCodes.find((e) => assertError(error, e))) {
              if (count < maxRetryAttempts) return { count, error };
              throw new TechnicalError('Try again later.');
            }
            throw error;
          }),
        ),
      ),
    );
}

function assertError(error: any, iterator: number) {
  return iterator === error?.status || iterator === error?.code;
}
