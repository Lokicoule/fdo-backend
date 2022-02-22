import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';
import { Document, FilterQuery, Model } from 'mongoose';
import { from, Observable, of } from 'rxjs';
import { Logger } from 'src/core/decorators/logger/logger.decorator';
import { NestedPartial } from 'src/core/types/partial.types';
import { IRepository } from './repository.d';

@Injectable()
export class Repository<T> implements IRepository<T> {
  protected constructor(readonly model: Model<T & Document>) {}

  public create(payload: NestedPartial<T>): Observable<T> {
    return from(new this.model(payload).save());
  }

  public find(conditions?: Partial<Record<keyof T, unknown>>): Observable<T[]> {
    return from(this.model.find(conditions as FilterQuery<T>)) as Observable<
      T[]
    >;
  }

  public findOne(conditions: Partial<Record<keyof T, unknown>>): Observable<T> {
    if (isEmpty(conditions)) return;

    return from(this.model.findOne(conditions as FilterQuery<T>));
  }

  public updateById(filter: any, entity: NestedPartial<T>): Observable<T> {
    return from(this.model.findOneAndUpdate(filter, entity));
  }

  public createOrUpdate(filter: any, entity: NestedPartial<T>): Observable<T> {
    return from(
      this.model.findOneAndUpdate(filter, entity, {
        new: true,
        upsert: true,
      }),
    );
  }

  remove(filter: any): Observable<any> {
    return from(this.model.remove(filter));
  }

  public removeById(id: string): Observable<T> {
    return from(
      this.model.findOneAndRemove({
        _id: id,
      }),
    );
  }

  public removeFromArray(ids: string[]): Observable<any> {
    return from(
      this.model.remove({
        _id: {
          $in: ids,
        },
      }),
    );
  }
}
