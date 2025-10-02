import { IsString } from 'class-validator';

export class CreateCiudadDto {
  @IsString()
  nombre: string;

  // Ejemplo de otro campo:
  // @IsString()
  // pais: string;
}