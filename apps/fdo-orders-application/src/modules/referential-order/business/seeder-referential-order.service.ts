import {
  ParameterReferentialEnum,
  UseCaseReferentialEnum,
} from '@app/fdo-core';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ReferentialOrder } from '../domain/entities/referential-order.entity';
import { ReferentialOrderRepository } from '../persistence/referential-order.repository';

@Injectable()
export class SeederReferentialOrderService {
  constructor(
    private readonly referentialOrderRepository: ReferentialOrderRepository,
  ) {}

  init(): Observable<ReferentialOrder> {
    return this.referentialOrderRepository.findOneOrCreate(
      { useCase: UseCaseReferentialEnum.CODE_GENERATOR },
      {
        useCase: UseCaseReferentialEnum.CODE_GENERATOR,
        parameters: [
          {
            key: ParameterReferentialEnum.COUNTER,
            value: '00001',
          },
          {
            key: ParameterReferentialEnum.SUFFIX,
            value: new Date().getFullYear().toString(),
          },
        ],
      },
    );
  }
}
