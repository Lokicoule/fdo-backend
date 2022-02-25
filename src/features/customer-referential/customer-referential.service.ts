import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { KeyValue } from 'src/core/models/key-value.entity';
import { NestedPartial } from 'src/core/types/partial.types';
import { CustomerReferentialRepository } from './customer-referential.repository';
import {
  CustomerReferential,
  CustomerReferentialDocument,
} from './entities/customer-referential.entity';
import { UseCase } from './enums/usecase.enum';

@Injectable()
export class CustomerReferentialService {
  constructor(private readonly repository: CustomerReferentialRepository) {}

  public createOrUpdateCustomerCode(
    payload: NestedPartial<CustomerReferential>,
  ) {
    return this.createOrUpdateCustomerReferential(
      UseCase.CODE_GENERATOR,
      payload,
    );
  }

  public createOrUpdateCustomerReferential(
    useCase: UseCase,
    payload: NestedPartial<CustomerReferential>,
  ) {
    return this.repository.createOrUpdate(
      {
        useCase,
      },
      payload,
    );
  }

  public getCustomerReferential(useCase: UseCase) {
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
