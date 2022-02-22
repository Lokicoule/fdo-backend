import { IReadRepository } from './interfaces/read.repository';
import { IWriteRepository } from './interfaces/write.repository';

export interface IRepository<T>
  extends IReadRepository<T>,
    IWriteRepository<T> {}
