import { Observable } from 'rxjs';
import { NestedPartial } from 'src/core/types/nested-partial.types';
import { IPopulate } from './populate';

interface IReadRepository<T> extends IPopulate {
  find(conditions?: Partial<Record<keyof T, unknown>>): Observable<T[]>;
  findOne(
    conditions: Partial<Record<keyof T, unknown>>,
    projection?: string | Record<string, unknown>,
    options?: Record<string, unknown>,
  ): Observable<T>;
}
interface IWriteRepository<T> {
  create(item: NestedPartial<T>): Observable<T>;
  updateById(filter: any, item: NestedPartial<T>): Observable<T>;
  createOrUpdate(filter: any, item: T): Observable<T>;
  removeById(id: any): Observable<T>;
  removeByIds(ids: any[]): Observable<boolean>;
}
export interface IRepository<T>
  extends IReadRepository<T>,
    IWriteRepository<T> {}
