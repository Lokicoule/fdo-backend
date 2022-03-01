import { Observable } from 'rxjs';
import { NestedPartial } from '../types/partial.types';

export interface IService<T> {
  findOne(filter: Partial<T>): Observable<T>;
  findAll(): Observable<T[]>;
  create(payload: NestedPartial<T>): Observable<T>;
  update(payload: Partial<T>): Observable<T>;
  removeById(id: string): Observable<T>;
  removeByIds(ids: string[]): Observable<boolean>;
}
