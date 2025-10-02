import { IsOptional, IsString } from 'class-validator';

export class UpdateCiudadDto {
  @IsOptional()
  @IsString()
  nombre?: string;
}
