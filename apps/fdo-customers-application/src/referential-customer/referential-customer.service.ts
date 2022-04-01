import { ReferentialService } from '@app/fdo-core';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ParameterReferentialCustomer } from './entities/parameter-referential-customer.entity';
import {
  ReferentialCustomer,
  ReferentialCustomerDocument,
} from './entities/referential-customer.entity';
import { ReferentialCustomerRepository } from './referential-customer.repository';

@Injectable()
export class ReferentialCustomerService extends ReferentialService<ReferentialCustomer> {
  constructor(
    private readonly referentialCustomerRepository: ReferentialCustomerRepository,
  ) {
    super(referentialCustomerRepository);
  }

  populateParameters(
    document: ReferentialCustomerDocument,
  ): Observable<ParameterReferentialCustomer[]> {
    return this.referentialCustomerRepository.populate<
      ParameterReferentialCustomer[]
    >(
      document,
      'parameters',
      ParameterReferentialCustomer.name,
      (referential: ReferentialCustomer) => referential.parameters,
    );
  }
}
