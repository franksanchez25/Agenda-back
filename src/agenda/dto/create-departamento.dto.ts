import { IsString } from 'class-validator';

export class CreateDepartamentoDto {
  @IsString()
  Departamento: string;
}
