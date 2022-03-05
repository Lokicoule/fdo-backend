import { NestedPartial } from 'src/core/types/nested-partial.types';

export abstract class EntityInput<T extends NestedPartial<T>> {
  id: string;
}
