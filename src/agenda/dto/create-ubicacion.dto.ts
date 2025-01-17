import { IsString } from 'class-validator';

export class CreateUbicacionDto {
  @IsString()
  Ubicacion: string;
}
