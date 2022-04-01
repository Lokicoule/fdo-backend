import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';
import { Document, FilterQuery, Model } from 'mongoose';
import { from, Observable } from 'rxjs';
import { IRepository } from './repository.interface';
import { Populate } from './populate/populate';
import { NestedPartial } from '../types';

@Injectable()
export abstract class Repository<T> extends Populate implements IRepository<T> {
  protected constructor(private readonly model: Model<T & Document>) {
    super();
  }

  create(payload: NestedPartial<T>): Observable<T> {
    return from(new this.model(payload).save());
  }

  find(conditions?: Partial<Record<keyof T, unknown>>): Observable<T[]> {
    return from(this.model.find(conditions as FilterQuery<T>)) as Observable<
      T[]
    >;
  }

  findById(id: any): Observable<T> {
    return from(this.model.findById(id));
  }

  findOne(conditions: Partial<Record<keyof T, unknown>>): Observable<T> {
    if (isEmpty(conditions)) return;

    return from(this.model.findOne(conditions as FilterQuery<T>));
  }

  updateById(id: any, entity: NestedPartial<T>): Observable<T> {
    return from(this.model.findByIdAndUpdate(id, entity));
  }

  createOrUpdate(filter: any, entity: NestedPartial<T>): Observable<T> {
    return from(
      this.model.findOneAndUpdate(filter, entity, {
        new: true,
        upsert: true,
      }),
    );
  }

  removeById(id: string): Observable<T> {
    return from(
      this.model.findOneAndRemove({
        _id: id,
      }),
    );
  }

  public removeByIds(ids: string[]): Observable<boolean> {
    return from(
      this.model
        .deleteMany({
          _id: {
            $in: ids,
          },
        })
        .then(({ deletedCount }) => deletedCount > 0),
    );
  }
}
