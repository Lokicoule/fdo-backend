import { ReferentialService } from '@app/fdo-core';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ParameterReferentialOrder } from '../domain/entities/parameter-referential-order.entity';
import {
  ReferentialOrder,
  ReferentialOrderDocument,
} from '../domain/entities/referential-order.entity';
import { ReferentialOrderRepository } from '../persistence/referential-order.repository';

@Injectable()
export class ReferentialOrderService extends ReferentialService<ReferentialOrder> {
  constructor(
    private readonly referentialOrderRepository: ReferentialOrderRepository,
  ) {
    super(referentialOrderRepository);
  }

  populateParameters(
    document: ReferentialOrderDocument,
  ): Observable<ParameterReferentialOrder[]> {
    return this.referentialOrderRepository.populate<
      ParameterReferentialOrder[]
    >(
      document,
      'parameters',
      ParameterReferentialOrder.name,
      (referential: ReferentialOrder) => referential.parameters,
    );
  }
}
