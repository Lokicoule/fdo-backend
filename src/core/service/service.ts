import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GqlEntity } from 'src/core/models/entity/entity.graphql';
import { IRepository } from '../repository';
import { IService } from './service.interface';

@Injectable()
export abstract class Service<T extends GqlEntity> implements IService<T> {
  protected constructor(private readonly repository: IRepository<T>) {}

  create(payload: T): Observable<T> {
    return this.repository.create(payload);
  }

  findOne(filter: Partial<T>): Observable<T> {
    return this.repository.findOne(filter);
  }

  findAll(): Observable<T[]> {
    return this.repository.find();
  }

  findById(id: any): Observable<T> {
    return this.repository.findById(id);
  }

  update(id: any, payload: T): Observable<T> {
    return this.repository.updateById(id, payload);
  }

  removeById(id: string): Observable<T> {
    return this.repository.removeById(id);
  }

  removeByIds(ids: string[]): Observable<boolean> {
    return this.repository.removeByIds(ids);
  }
}
