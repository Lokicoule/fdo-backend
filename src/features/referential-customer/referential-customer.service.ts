import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { KeyValue } from 'src/core/models/key-value/key-value.entity';
import { ParameterReferentialEnum } from '../referential/enums/parameter-referential.enum';
import { ReferentialService } from '../referential/service';
import { ReferentialCustomerRepository } from './referential-customer.repository';
import {
  ReferentialCustomer,
  ReferentialCustomerDocument,
} from './entities/referential-customer.entity';

@Injectable()
export class ReferentialCustomerService extends ReferentialService<ReferentialCustomer> {
  constructor(
    private readonly referentialCustomerRepository: ReferentialCustomerRepository,
  ) {
    super(referentialCustomerRepository);
  }

  populateParameters(
    document: ReferentialCustomerDocument,
  ): Observable<KeyValue<ParameterReferentialEnum>[]> {
    return this.referentialCustomerRepository.populate<
      KeyValue<ParameterReferentialEnum>[]
    >(
      document,
      'parameters',
      KeyValue.name,
      (referential: ReferentialCustomer) => referential.parameters,
    );
  }
}
