import { Observable } from 'rxjs';
import { GqlEntity } from '../models/entity/entity.graphql';

export interface IResolver<ObjectType extends GqlEntity, FilterType> {
  findAll: () => Observable<ObjectType[] | null>;
  findOne: (filter: FilterType) => Observable<ObjectType | null>;

  removeById(id: string): Observable<ObjectType>;
  removeByIds(ids: string[]): Observable<boolean>;
}
