import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CiudadesModule } from './ciudades/ciudades.module';
import { AtletasModule } from './atletas/atletas.module';
import { Ciudad } from './ciudades/entities/ciudad.entity';
import { Atleta } from './atletas/entities/atleta.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'maraton.sqlite',
      entities: [Ciudad, Atleta],
      synchronize: true, // en producción debe ser false
    }),
    CiudadesModule,
    AtletasModule,
  ],
})
export class AppModule {}
