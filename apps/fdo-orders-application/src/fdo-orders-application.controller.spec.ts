import { Test, TestingModule } from '@nestjs/testing';
import { FdoOrdersApplicationController } from './fdo-orders-application.controller';
import { FdoOrdersApplicationService } from './fdo-orders-application.service';

describe('FdoOrdersApplicationController', () => {
  let fdoOrdersApplicationController: FdoOrdersApplicationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FdoOrdersApplicationController],
      providers: [FdoOrdersApplicationService],
    }).compile();

    fdoOrdersApplicationController = app.get<FdoOrdersApplicationController>(FdoOrdersApplicationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(fdoOrdersApplicationController.getHello()).toBe('Hello World!');
    });
  });
});
