import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atleta } from './entities/atleta.entity';
import { Ciudad } from '../ciudades/entities/ciudad.entity';
import { AtletaService } from './atletas.service';
import { AtletasController } from './atletas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Atleta, Ciudad])], 
  providers: [AtletaService],
  controllers: [AtletasController],
  exports: [AtletaService],
})
export class AtletasModule {}
