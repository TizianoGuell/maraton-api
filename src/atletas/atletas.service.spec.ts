import { Test, TestingModule } from '@nestjs/testing';
import { AtletaService } from './atletas.service';

describe('AtletasService', () => {
  let service: AtletaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtletaService],
    }).compile();

    service = module.get<AtletaService>(AtletaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
