import {
  ParameterReferentialEnum,
  UseCaseReferentialEnum,
} from '@app/fdo-core';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ReferentialProduct } from '../domain/entities/referential-product.entity';
import { ReferentialProductRepository } from '../persistence/referential-product.repository';

@Injectable()
export class SeederReferentialProductService {
  constructor(
    private readonly referentialProductRepository: ReferentialProductRepository,
  ) {}

  init(): Observable<ReferentialProduct> {
    return this.referentialProductRepository.findOneOrCreate(
      { useCase: UseCaseReferentialEnum.CODE_GENERATOR },
      {
        useCase: UseCaseReferentialEnum.CODE_GENERATOR,
        parameters: [
          {
            key: ParameterReferentialEnum.COUNTER,
            value: '00',
          },
          {
            key: ParameterReferentialEnum.SUFFIX,
            value: 'P',
          },
        ],
      },
    );
  }
}
