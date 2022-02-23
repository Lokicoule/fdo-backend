import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { NestedPartial } from 'src/core/types/partial.types';
import { ReferentialParameter } from './entities/referential-parameter.entity';
import {
  Referential,
  ReferentialDocument,
} from './entities/referential.entity';
import { ReferentialRepository } from './referential.repository';

@Injectable()
export class ReferentialService {
  constructor(private readonly repository: ReferentialRepository) {}

  createReferential(payload: NestedPartial<Referential>) {
    return this.repository.create(payload);
  }

  createOrUpdateReferential(filter: any, payload: NestedPartial<Referential>) {
    return this.repository.createOrUpdate(filter, payload);
  }

  getReferential(filter) {
    return this.repository.findOne({
      ...filter,
    });
  }

  updateReferential(id: any, payload: NestedPartial<Referential>) {
    return this.repository.updateById(id, payload);
  }

  populateParameters(
    document: ReferentialDocument,
  ): Observable<ReferentialParameter[]> {
    return this.repository.populate<ReferentialParameter[]>(
      document,
      'parameters',
      ReferentialParameter.name,
      (referential: Referential) => referential.parameters,
    );
  }
}
