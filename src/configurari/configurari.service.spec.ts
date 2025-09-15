import { Test, TestingModule } from '@nestjs/testing';
import { ConfigurariService } from './configurari.service';

describe('ConfigurariService', () => {
  let service: ConfigurariService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigurariService],
    }).compile();

    service = module.get<ConfigurariService>(ConfigurariService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
