import { Injectable } from '@nestjs/common';
import { defer, switchMap } from 'rxjs';
import { Service } from 'src/core/service';
import { retryWhenDuplicate } from '../../core/helpers/observer.helper';
import { ReferentialCustomerService } from '../../features-referential/referential-customer/referential-customer.service';
import { UseCaseReferentialEnum } from '../../features-referential/core/enums/usecase-referential.enum';
import { generateCodeFromParamsUseCase } from '../../features-referential/core/use-cases/generate-code-from-params/generate-code-from-params';
import { getUpdatedReferentialByCounterIncrementUseCase } from '../../features-referential/core/use-cases/get-incremented-counter-param/get-updated-referential-by-counter-increment';
import { CustomersRepository } from './customers.repository';
import { Customer } from './entities/customer.entity';
import { isEmpty } from 'lodash';

@Injectable()
export class CustomersService extends Service<Customer> {
  constructor(
    private readonly customerRepository: CustomersRepository,
    private readonly referentialService: ReferentialCustomerService,
  ) {
    super(customerRepository);
  }

  override create(payload: Partial<Customer>) {
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
