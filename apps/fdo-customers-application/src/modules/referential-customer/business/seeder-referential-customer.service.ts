import {
  ParameterReferentialEnum,
  UseCaseReferentialEnum,
} from '@app/fdo-core';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ReferentialCustomer } from '../domain/entities/referential-customer.entity';
import { ReferentialCustomerRepository } from '../persistence/referential-customer.repository';

@Injectable()
export class SeederReferentialCustomerService {
  constructor(
    private readonly referentialCustomerRepository: ReferentialCustomerRepository,
  ) {}

  init(): Observable<ReferentialCustomer> {
    return this.referentialCustomerRepository.findOneOrCreate(
      { useCase: UseCaseReferentialEnum.CODE_GENERATOR },
      {
        useCase: UseCaseReferentialEnum.CODE_GENERATOR,
        parameters: [
          {
            key: ParameterReferentialEnum.COUNTER,
            value: '000001',
          },
          {
            key: ParameterReferentialEnum.SUFFIX,
            value: 'CL',
          },
        ],
      },
    );
  }
}
