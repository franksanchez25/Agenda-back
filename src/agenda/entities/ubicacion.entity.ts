import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Agenda } from './agenda.entity';

@Entity('ubicacion')
export class Ubicacion {
  @PrimaryGeneratedColumn('increment')
  ubicacionID: number;

  @Column('text', {
    nullable: false,
  })
  Ubicacion: string;

  @OneToMany(() => Agenda, (agenda) => agenda.ubicacion)
  agendas: Agenda[];
}
