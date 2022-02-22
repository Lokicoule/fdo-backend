import { InternalServerErrorException } from '@nestjs/common';
import { Observable } from 'rxjs';

const isInstanceOf = (target: any, expectedType: any) =>
  target && target instanceof expectedType;

const wrapper = (method: any) =>
  function (...args: any[]): any {
    console.log(method);

    if (!method)
      throw new InternalServerErrorException("Method can't be null !");

    method.name &&
      console.log(`=== ENTER ${method.name} (${JSON.stringify(args)}) ===`);
    try {
      const result = method.apply(this, args);

      if (isInstanceOf(result, Promise)) {
        return result.then((asyncResult) => {
          method.name &&
            console.log(
              `=== EXIT ASYNC ${method.name} (${JSON.stringify(
                asyncResult,
              )}) ===`,
            );
          return asyncResult;
        });
      } else if (isInstanceOf(result, Observable)) {
        return result.subscribe((asyncResult) => {
          method.name &&
            console.log(
              `=== EXIT ASYNC ${method.name} (${JSON.stringify(
                asyncResult,
              )}) ===`,
            );
          return asyncResult;
        });
      }

      method.name &&
        console.log(`=== EXIT ${method.name} (${JSON.stringify(result)}) ===`);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

function generateDescriptor(
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  console.log(descriptor);
  descriptor.value = wrapper(descriptor.value);
  return descriptor;
}

const methodDecorator = (descriptor: PropertyDescriptor) =>
  generateDescriptor(descriptor);

const classDecorator = (target: any) => {
  Object.getOwnPropertyNames(target?.prototype).forEach(
    (propertyName: string) => {
      const descriptor: PropertyDescriptor = Object.getOwnPropertyDescriptor(
        target.prototype,
        propertyName,
      );

      isInstanceOf(descriptor?.value, Function) &&
        Object.defineProperty(
          target.prototype,
          propertyName,
          generateDescriptor(descriptor),
        );
    },
  );
};

const decoratorFactory =
  () => (target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
    (descriptor && methodDecorator(descriptor)) || classDecorator(target);
  };

export const Logger = (): any => decoratorFactory();
