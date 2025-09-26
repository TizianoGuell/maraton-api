import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CiudadesModule } from './ciudades/ciudades.module';
import { AtletasModule } from './atletas/atletas.module';

@Module({
  imports: [CiudadesModule, AtletasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
