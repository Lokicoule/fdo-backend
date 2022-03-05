import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GqlEntity } from 'src/core/models/entity/entity.graphql';
import { NestedPartial } from 'src/core/types/nested-partial.types';
import { IRepository } from '../repository';
import { IService } from './service.interface';

@Injectable()
export abstract class Service<T extends GqlEntity> implements IService<T> {
  protected constructor(private readonly repository: IRepository<T>) {}

  create(payload: NestedPartial<T>): Observable<T> {
    return this.repository.create(payload);
  }

  findOne(filter: Partial<T>): Observable<T> {
    return this.repository.findOne(filter);
  }

  findAll(): Observable<T[]> {
    return this.repository.find();
  }

  update(payload: Partial<T>): Observable<T> {
    return this.repository.updateById(payload._id, payload);
  }

  removeById(id: string): Observable<T> {
    return this.repository.removeById(id);
  }

  removeByIds(ids: string[]): Observable<boolean> {
    return this.repository.removeByIds(ids);
  }
}
