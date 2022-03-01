import { Observable } from 'rxjs';
import { GqlEntity } from '../models/entity/entity.graphql';
import { IService } from '../service';

export interface IResolver<T extends GqlEntity, C, U, F> {
  readonly _service: IService<T>;
  findAll: () => Observable<T[] | null>;
  findOne: (filter: F) => Observable<T | null>;
  create: (createInput: C) => Observable<T>;
  update: (updateInput: U) => Observable<T>;
  removeById(id: string): Observable<T>;
  removeByIds(ids: string[]): Observable<boolean>;
}
