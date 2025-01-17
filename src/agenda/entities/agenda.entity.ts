import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Departamento } from './departamento.entity';
import { Ubicacion } from './ubicacion.entity';

@Entity('agenda')
export class Agenda {
  @PrimaryGeneratedColumn('increment')
  directorioID: number;

  @Column('text', {
    nullable: false,
  })
  NombreCompleto: string;

  @Column('text', {
    nullable: true,
  })
  Correo: string;

  @Column('text', {
    nullable: false,
  })
  Extension: string;

  @ManyToOne(() => Departamento, (departamento) => departamento.agendas)
  @JoinColumn({ name: 'departamentoID' })
  departamento: Departamento;

  @Column()
  departamentoID: number;

  @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.agendas)
  @JoinColumn({ name: 'ubicacionID' })
  ubicacion: Ubicacion;

  @Column()
  ubicacionID: number;
}
