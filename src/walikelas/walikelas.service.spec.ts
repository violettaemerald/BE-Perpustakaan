import { Test, TestingModule } from '@nestjs/testing';
import { WalikelasService } from './walikelas.service.js';

describe('WalikelasService', () => {
  let service: WalikelasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WalikelasService],
    }).compile();

    service = module.get<WalikelasService>(WalikelasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
