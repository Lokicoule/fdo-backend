import { NestedPartial } from 'src/core/types/partial.types';

export abstract class EntityInput<T extends NestedPartial<T>> {
  id: string;
}
