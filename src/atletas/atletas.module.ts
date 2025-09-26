import { Module } from '@nestjs/common';
import { AtletasService } from './atletas.service';
import { AtletasController } from './atletas.controller';

@Module({
  controllers: [AtletasController],
  providers: [AtletasService],
})
export class AtletasModule {}
