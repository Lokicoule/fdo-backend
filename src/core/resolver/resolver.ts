import { Type } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver as NestResolver,
} from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { GqlEntity } from '../models/entity/entity.graphql';
import { IService } from '../service';
import { IResolver } from './resolver.interface';

export function Resolver<T extends GqlEntity, C, U, F>(
  entityType: Type<T>,
  createInputType: C,
  updateInputType: U,
  findOneInputType: F,
): Type<IResolver<T, C, U, F>> {
  @NestResolver({ isAbstract: true })
  class ResolverHost implements IResolver<T, C, U, F> {
    constructor(readonly _service: IService<T>) {}

    @Query(() => [entityType], {
      name: `get${entityType.name}s`,
      nullable: true,
    })
    findAll() {
      return this._service.findAll();
    }

    @Query(() => entityType, {
      name: `get${entityType.name}`,
      nullable: true,
    })
    findOne(@Args('filter', { type: () => findOneInputType }) filter: F) {
      return this._service.findOne(filter);
    }

    @Mutation(() => entityType, {
      name: `create${entityType.name}`,
    })
    create(
      @Args({
        type: () => createInputType,
        name: `create${entityType.name}Input`,
      })
      createInput: C,
    ): Observable<T> {
      return this._service.create(createInput);
    }

    @Mutation(() => entityType, {
      name: `update${entityType.name}`,
    })
    update(
      @Args({
        type: () => updateInputType,
        name: `update${entityType.name}Input`,
      })
      payload: U,
    ) {
      return this._service.update(payload);
    }

    @Mutation(() => entityType, {
      name: `remove${entityType.name}`,
    })
    removeById(@Args('id', { type: () => String }) id: string): Observable<T> {
      return this._service.removeById(id);
    }

    @Mutation(() => Boolean, {
      name: `remove${entityType.name}s`,
    })
    removeByIds(
      @Args('ids', { type: () => [String] }) ids: string[],
    ): Observable<boolean> {
      return this._service.removeByIds(ids);
    }
  }

  return ResolverHost;
}
