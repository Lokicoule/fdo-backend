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

export function createBaseResolver<ObjectType extends GqlEntity>(
  entityTypeRef: Type<ObjectType>,
): Type<IResolver<ObjectType>> {
  @NestResolver({ isAbstract: true })
  class ResolverHost implements IResolver<ObjectType> {
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
    findById(@Args('id', { type: () => String }) id: string) {
      return this.service.findById(id);
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
