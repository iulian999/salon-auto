import { Test, TestingModule } from '@nestjs/testing';
import { ManageriController } from './manageri.controller';

describe('ManageriController', () => {
  let controller: ManageriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManageriController],
    }).compile();

    controller = module.get<ManageriController>(ManageriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
