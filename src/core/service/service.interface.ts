import { Observable } from 'rxjs';

interface IReadService<T> {
  findOne(filter: Partial<T>): Observable<T>;
  findAll(): Observable<T[]>;
  findById(id: any): Observable<T>;
}
interface IWriteService<T> {
  create(payload: T): Observable<T>;
  update(id: any, payload: T): Observable<T>;
  removeById(id: string): Observable<T>;
  removeByIds(ids: string[]): Observable<boolean>;
}
export interface IService<T> extends IReadService<T>, IWriteService<T> {}
