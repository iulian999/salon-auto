import { Test, TestingModule } from '@nestjs/testing';
import { ManageriService } from './manageri.service';

describe('ManageriService', () => {
  let service: ManageriService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManageriService],
    }).compile();

    service = module.get<ManageriService>(ManageriService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
