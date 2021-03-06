import { Observable } from 'rxjs';
import { NestedPartial } from '../types';
import { IPopulate } from './populate';

interface IReadRepository<T> extends IPopulate {
  find(conditions?: Partial<Record<keyof T, unknown>>): Observable<T[]>;
  findById(id: any): Observable<T>;
  findOne(
    conditions: Partial<Record<keyof T, unknown>>,
    projection?: string | Record<string, unknown>,
    options?: Record<string, unknown>,
  ): Observable<T>;
}
interface IWriteRepository<T> {
  create(item: NestedPartial<T>): Observable<T>;
  updateById(id: any, item: NestedPartial<T>): Observable<T>;
  createOrUpdate(filter: any, item: T): Observable<T>;
  removeById(id: any): Observable<T>;
  removeByIds(ids: any[]): Observable<boolean>;
}
export interface IRepository<T>
  extends IReadRepository<T>,
    IWriteRepository<T> {
  findOneOrCreate(
    conditions: Partial<Record<keyof T, unknown>>,
    entity: NestedPartial<T>,
  ): Observable<T>;
}
