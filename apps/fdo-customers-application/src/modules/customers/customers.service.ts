import {
  generateCodeFromParamsUseCase,
  getUpdatedReferentialByCounterIncrementUseCase,
  retryWhenDuplicate,
  Service,
  UseCaseReferentialEnum,
} from '@app/fdo-core';
import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';
import { defer, switchMap } from 'rxjs';
import { ReferentialCustomerService } from '../referential-customer/business/referential-customer.service';
import { CustomersRepository } from './customers.repository';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService extends Service<Customer> {
  constructor(
    private readonly customerRepository: CustomersRepository,
    private readonly referentialService: ReferentialCustomerService,
  ) {
    super(customerRepository);
  }

  override create(payload: Customer) {
    const { code } = payload;
    if (!isEmpty(code)) return this.customerRepository.create(payload);
    return defer(() =>
      this.referentialService.findOne({
        useCase: UseCaseReferentialEnum.CODE_GENERATOR,
      }),
    ).pipe(
      switchMap((customerReferential) =>
        this.referentialService.createOrUpdateCodeGenerator(
          getUpdatedReferentialByCounterIncrementUseCase(customerReferential),
        ),
      ),
      switchMap((customerReferential) =>
        this.customerRepository.create({
          ...payload,
          code: generateCodeFromParamsUseCase(customerReferential.parameters),
        }),
      ),
      retryWhenDuplicate(),
    );
  }
}
