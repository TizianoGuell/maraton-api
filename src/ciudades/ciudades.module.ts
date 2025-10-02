import { Module } from '@nestjs/common';
import { CiudadService } from './ciudades.service';
import { CiudadController } from './ciudades.controller';
import { Ciudad } from './entities/ciudad.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ciudad])], 
  providers: [CiudadService],
  controllers: [CiudadController],
  exports: [CiudadService],
})
export class CiudadesModule {}
