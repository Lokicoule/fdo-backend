import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { createBaseResolver } from '../../core/resolver/resolver';
import { ParameterReferentialOrder } from './entities/parameter-referential-order.entity';
import {
  ReferentialOrder,
  ReferentialOrderDocument,
} from './entities/referential-order.entity';
import { CreateReferentialOrderInput } from './inputs/create-referential-order.input';
import { UpdateReferentialOrderInput } from './inputs/update-referential-order.input';
import { ReferentialOrderService } from './referential-order.service';

const ReferentialOrderBaseResolver = createBaseResolver(ReferentialOrder);
@Resolver(() => ReferentialOrder)
export class ReferentialOrderResolver extends ReferentialOrderBaseResolver {
  constructor(private readonly service: ReferentialOrderService) {
    super(service);
  }

  @Mutation(() => ReferentialOrder)
  createReferentialOrder(
    @Args('createReferentialOrderInput')
    payload: CreateReferentialOrderInput,
  ): Observable<ReferentialOrder> {
    return this.service.create(plainToClass(ReferentialOrder, payload));
  }

  @Mutation(() => ReferentialOrder)
  updateReferentialOrder(
    @Args('id') id: string,
    @Args('updateReferentialOrderInput')
    payload: UpdateReferentialOrderInput,
  ): Observable<ReferentialOrder> {
    return this.service.update(id, plainToClass(ReferentialOrder, payload));
  }

  @ResolveField()
  parameters(
    @Parent() document: ReferentialOrderDocument,
    @Args('populate') populate: boolean,
  ): Observable<ParameterReferentialOrder[]> {
    if (!populate) return;
    return this.service.populateParameters(document);
  }
}
