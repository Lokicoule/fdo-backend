import { Observable } from 'rxjs';
import { NestedPartial } from '../types/nested-partial.types';

interface IReadService<T> {
  findOne(filter: Partial<T>): Observable<T>;
  findAll(): Observable<T[]>;
  findById(id: any): Observable<T>;
}
interface IWriteService<T> {
  create(payload: NestedPartial<T>): Observable<T>;
  update(id: any, payload: Partial<T>): Observable<T>;
  removeById(id: string): Observable<T>;
  removeByIds(ids: string[]): Observable<boolean>;
}
export interface IService<T> extends IReadService<T>, IWriteService<T> {}
