import { Test, TestingModule } from '@nestjs/testing';
import { AtletasService } from './atletas.service';

describe('AtletasService', () => {
  let service: AtletasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtletasService],
    }).compile();

    service = module.get<AtletasService>(AtletasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
