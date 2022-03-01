import { Injectable } from '@nestjs/common';
import { defer, switchMap } from 'rxjs';
import { Service } from 'src/core/service';
import { CustomerReferentialService } from '../customer-referential/customer-referential.service';
import { UseCaseEnum } from '../customer-referential/enums/usecase.enum';
import { CustomersRepository } from './customers.repository';
import {
  codeGenerationUseCase,
  counterParameterUseCase,
  retryWhenCodeAlreadyExist,
} from './customers.usecases';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService extends Service<Customer> {
  constructor(
    private readonly customerRepository: CustomersRepository,
    private readonly referentialService: CustomerReferentialService,
  ) {
    super(customerRepository);
  }

  override create(payload: Partial<Customer>) {
    const { code } = payload;
    if (code) return this.customerRepository.create(payload);

    return defer(() =>
      this.referentialService.getCustomerReferential(
        UseCaseEnum.CODE_GENERATOR,
      ),
    ).pipe(
      switchMap((customerReferential) =>
        this.referentialService.createOrUpdateCustomerCode(
          counterParameterUseCase(customerReferential),
        ),
      ),
      switchMap((customerReferential) =>
        this.customerRepository.create({
          code: codeGenerationUseCase(customerReferential.parameters),
          ...payload,
        }),
      ),
      retryWhenCodeAlreadyExist(5),
    );
  }
}
