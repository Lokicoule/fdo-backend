import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';
import { Document, FilterQuery, Model } from 'mongoose';
import { from, Observable } from 'rxjs';
import { NestedPartial } from 'src/core/types/partial.types';
import { IRepository } from './repository.interface';
import { Populate } from './populate/populate';

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

  findOne(conditions: Partial<Record<keyof T, unknown>>): Observable<T> {
    if (isEmpty(conditions)) return;

    return from(this.model.findOne(conditions as FilterQuery<T>));
  }

  updateById(filter: any, entity: NestedPartial<T>): Observable<T> {
    return from(this.model.findOneAndUpdate(filter, entity));
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
