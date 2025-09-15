import { Test, TestingModule } from '@nestjs/testing';
import { RezervariController } from './rezervari.controller';

describe('RezervariController', () => {
  let controller: RezervariController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RezervariController],
    }).compile();

    controller = module.get<RezervariController>(RezervariController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
