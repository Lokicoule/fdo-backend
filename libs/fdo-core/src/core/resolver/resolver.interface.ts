import { Observable } from 'rxjs';
import { GqlEntity } from '../models/entity/entity.graphql';

interface IQueryResolver<ObjectType extends GqlEntity> {
  findAll: () => Observable<ObjectType[] | null>;
  findById: (id: string) => Observable<ObjectType | null>;
}
interface IMutationResolver<ObjectType extends GqlEntity> {
  removeById(id: string): Observable<ObjectType>;
  removeByIds(ids: string[]): Observable<boolean>;
}

export interface IResolver<ObjectType extends GqlEntity>
  extends IQueryResolver<ObjectType>,
    IMutationResolver<ObjectType> {}
