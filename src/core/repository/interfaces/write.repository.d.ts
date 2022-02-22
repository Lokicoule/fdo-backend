export interface IWriteRepository<T> {
  create(item: T): Observable<T>;
  updateById(filter: any, item: T): Observable<T>;
  createOrUpdate(filter: any, item: T): Observable<T>;
  removeById(id: any): Observable<T>;
  removeFromArray(ids: any[]): Observable<any>;
  remove(filter: any): Observable<any>;
}
