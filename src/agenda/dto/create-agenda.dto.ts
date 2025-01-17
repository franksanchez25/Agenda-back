import { IsEmail, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateAgendaDto {
  @IsString()
  NombreCompleto: string;

  @IsString()
  Extension: string;

  @IsString()
  @IsEmail()
  Correo: string;

  @IsNumber()
  @IsPositive()
  departamentoID: number;

  @IsNumber()
  @IsPositive()
  ubicacionID: number;
}
