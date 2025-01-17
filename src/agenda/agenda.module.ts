import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendaService } from './agenda.service';
import { AgendaController } from './agenda.controller';
import { Agenda } from './entities/agenda.entity';
import { Departamento } from './entities/departamento.entity';
import { Ubicacion } from './entities/ubicacion.entity';

@Module({
  controllers: [AgendaController],
  providers: [AgendaService],
  imports: [TypeOrmModule.forFeature([Agenda, Departamento, Ubicacion])],
})
export class AgendaModule {}
