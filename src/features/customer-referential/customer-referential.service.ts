import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { NestedPartial } from 'src/core/types/partial.types';
import { CustomerReferentialRepository } from './customer-referential.repository';
import {
  CustomerReferential,
  CustomerReferentialDocument,
} from './entities/customer-referential.entity';
import { KeyValue } from './entities/key-value.entity';
import { UseCaseEnum } from './enums/usecase.enum';

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
