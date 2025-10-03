import { IsOptional, IsInt, IsString } from 'class-validator';

export class UpdateAtletaDto {
  @IsOptional() @IsInt() dni?: number;
  @IsOptional() @IsString() nombre?: string;
  @IsOptional() @IsString() tiempo?: string;
  @IsOptional() @IsInt() posicion?: number;
  @IsOptional() @IsInt() ciudadId?: number;
}
