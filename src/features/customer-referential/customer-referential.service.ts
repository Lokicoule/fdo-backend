import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { KeyValue } from 'src/core/models/key-value/key-value.entity';
import { NestedPartial } from 'src/core/types/partial.types';
import { UseCaseEnum } from 'src/core/models/enums/usecase.enum';
import { CustomerReferentialRepository } from './customer-referential.repository';
import {
  CustomerReferential,
  CustomerReferentialDocument,
} from './entities/customer-referential.entity';

@Injectable()
export class CustomerReferentialService {
  constructor(private readonly repository: CustomerReferentialRepository) {}

  createOrUpdateCustomerCode(payload: NestedPartial<CustomerReferential>) {
    return this.createOrUpdateCustomerReferential(
      UseCaseEnum.CODE_GENERATOR,
      payload,
    );
  }

  createOrUpdateCustomerReferential(
    useCase: UseCaseEnum,
    payload: NestedPartial<CustomerReferential>,
  ) {
    return this.repository.createOrUpdate(
      {
        useCase,
      },
      payload,
    );
  }

  getCustomerReferential(useCase: UseCaseEnum) {
    return this.repository.findOne({
      useCase,
    });
  }

  populateParameters(
    document: CustomerReferentialDocument,
  ): Observable<KeyValue[]> {
    return this.repository.populate<KeyValue[]>(
      document,
      'parameters',
      KeyValue.name,
      (referential: CustomerReferential) => referential.parameters,
    );
  }
}
