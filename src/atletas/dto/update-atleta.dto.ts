import { IsOptional, IsInt, IsString } from 'class-validator';

export class UpdateAtletaDto {
  @IsOptional() @IsInt() dni?: number;
  @IsOptional() @IsString() nombre?: string;
  @IsOptional() @IsString() tiempo?: string;
  @IsOptional() @IsInt() posicion?: number;
  @IsOptional() @IsInt() ciudadId?: number;
}
// Si deseas, puedes agregar validaciones adicionales según tus necesidades
// Por ejemplo, para asegurarte de que el tiempo tenga un formato específico, etc.
