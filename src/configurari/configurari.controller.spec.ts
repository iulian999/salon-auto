import { Test, TestingModule } from '@nestjs/testing';
import { ConfigurariController } from './configurari.controller';

describe('ConfigurariController', () => {
  let controller: ConfigurariController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfigurariController],
    }).compile();

    controller = module.get<ConfigurariController>(ConfigurariController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
