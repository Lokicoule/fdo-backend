export interface IReadRepository<T> {
  find(conditions?: Partial<Record<keyof T, unknown>>): Observable<T[]>;
  findOne(
    conditions: Partial<Record<keyof T, unknown>>,
    projection?: string | Record<string, unknown>,
    options?: Record<string, unknown>,
  ): Observable<T>;
}
