import { IsInt, IsString } from 'class-validator';

export class CreateAtletaDto {
  @IsInt()
  dni: number;

  @IsString()
  nombre: string;

  @IsString()
  tiempo: string;

  @IsInt()
  posicion: number;

  @IsInt()
  ciudadId: number;
}

