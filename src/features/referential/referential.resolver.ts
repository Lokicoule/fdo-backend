import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateReferentialInput } from './dtos/create-referential.input';
import { UpdateReferentialInput } from './dtos/update-referential.input';
import {
  Referential,
  ReferentialDocument,
} from './entities/referential.entity';
import { ReferentialService } from './referential.service';

@Resolver(() => Referential)
export class ReferentialResolver {
  constructor(private readonly service: ReferentialService) {}

  @Mutation(() => Referential)
  createReferential(
    @Args('createReferentialInput')
    payload: CreateReferentialInput,
  ) {
    return this.service.createReferential(payload);
  }

  @Mutation(() => Referential)
  updateReferential(
    @Args('updateReferentialInput')
    payload: UpdateReferentialInput,
  ) {
    return this.service.updateReferential(payload.id, payload);
  }

  @ResolveField()
  async parameters(
    @Parent() document: ReferentialDocument,
    @Args('populate') populate: boolean,
  ) {
    if (!populate) return;
    return this.service.populateParameters(document);
  }
}
