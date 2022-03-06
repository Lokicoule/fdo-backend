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

export function createBaseResolver<ObjectType extends GqlEntity, FilterType>(
  entityTypeRef: Type<ObjectType>,
  findOneInputTypeRef: Type<FilterType>,
): Type<IResolver<ObjectType, FilterType>> {
  @NestResolver({ isAbstract: true })
  class ResolverHost implements IResolver<ObjectType, FilterType> {
    constructor(readonly service: IService<ObjectType>) {}

    @Query(() => [entityTypeRef], {
      name: `get${entityTypeRef.name}s`,
      nullable: true,
    })
    findAll() {
      return this.service.findAll();
    }

    @Query(() => entityTypeRef, {
      name: `get${entityTypeRef.name}`,
      nullable: true,
    })
    findOne(
      @Args('filter', { type: () => findOneInputTypeRef }) filter: FilterType,
    ) {
      return this.service.findOne(filter);
    }

    @Mutation(() => entityTypeRef, {
      name: `remove${entityTypeRef.name}`,
    })
    removeById(
      @Args('id', { type: () => String }) id: string,
    ): Observable<ObjectType> {
      return this.service.removeById(id);
    }

    @Mutation(() => Boolean, {
      name: `remove${entityTypeRef.name}s`,
    })
    removeByIds(
      @Args('ids', { type: () => [String] }) ids: string[],
    ): Observable<boolean> {
      return this.service.removeByIds(ids);
    }
  }

  return ResolverHost;
}
