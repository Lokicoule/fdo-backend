import { Observable } from 'rxjs';
import { GqlEntity } from '../models/entity/entity.graphql';

interface IQueryResolver<ObjectType extends GqlEntity, FilterType> {
  findAll: () => Observable<ObjectType[] | null>;
  findOne: (filter: FilterType) => Observable<ObjectType | null>;
}
interface IMutationResolver<ObjectType extends GqlEntity> {
  removeById(id: string): Observable<ObjectType>;
  removeByIds(ids: string[]): Observable<boolean>;
}

export interface IResolver<ObjectType extends GqlEntity, FilterType>
  extends IQueryResolver<ObjectType, FilterType>,
    IMutationResolver<ObjectType> {}
