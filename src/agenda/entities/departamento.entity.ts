import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Agenda } from './agenda.entity';

@Entity('departamento')
export class Departamento {
  @PrimaryGeneratedColumn('increment')
  departamentoID: number;

  @Column('text', {
    nullable: false,
  })
  Departamento: string;

  @OneToMany(() => Agenda, (agenda) => agenda.departamento)
  agendas: Agenda[];
}
