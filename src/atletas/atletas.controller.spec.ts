import { Test, TestingModule } from '@nestjs/testing';
import { AtletasController } from './atletas.controller';
import { AtletasService } from './atletas.service';

describe('AtletasController', () => {
  let controller: AtletasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtletasController],
      providers: [AtletasService],
    }).compile();

    controller = module.get<AtletasController>(AtletasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
