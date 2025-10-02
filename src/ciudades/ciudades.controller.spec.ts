import { Test, TestingModule } from '@nestjs/testing';
import { CiudadController } from './ciudades.controller';
import { CiudadService } from './ciudades.service';

describe('CiudadesController', () => {
  let controller: CiudadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CiudadController],
      providers: [CiudadService],
    }).compile();

    controller = module.get<CiudadController>(CiudadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
