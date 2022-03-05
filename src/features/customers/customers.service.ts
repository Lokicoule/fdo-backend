import { Injectable } from '@nestjs/common';
import { defer, switchMap } from 'rxjs';
import { Service } from 'src/core/service';
import { retryWhenDuplicate } from '../../core/helpers/observer.helper';
import { ReferentialCustomerService } from '../referential-customer/referential-customer.service';
import { UseCaseReferentialEnum } from '../referential/enums/usecase-referential.enum';
import { generateCodeFromParamsUseCase } from '../referential/use-cases/generate-code-from-params/generate-code-from-params';
import { getIncrementedCounterParamUseCase } from '../referential/use-cases/get-incremented-counter-param/get-incremented-counter-param';
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

  override create(payload: Partial<Customer>) {
    const { code } = payload;
    if (code) return this.customerRepository.create(payload);

    return defer(() =>
      this.referentialService.findOne({
        useCase: UseCaseReferentialEnum.CODE_GENERATOR,
      }),
    ).pipe(
      switchMap((customerReferential) =>
        this.referentialService.createOrUpdateCodeGenerator(
          getIncrementedCounterParamUseCase(customerReferential),
        ),
      ),
      switchMap((customerReferential) =>
        this.customerRepository.create({
          code: generateCodeFromParamsUseCase(customerReferential.parameters),
          ...payload,
        }),
      ),
      retryWhenDuplicate(),
    );
  }
}
