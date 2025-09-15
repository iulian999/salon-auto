import { Test, TestingModule } from '@nestjs/testing';
import { UtilizatoriController } from './utilizatori.controller';

describe('UtilizatoriController', () => {
  let controller: UtilizatoriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UtilizatoriController],
    }).compile();

    controller = module.get<UtilizatoriController>(UtilizatoriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
