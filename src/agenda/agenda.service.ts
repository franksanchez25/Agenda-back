import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Agenda } from './entities/agenda.entity';
import { Repository } from 'typeorm';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { Departamento } from './entities/departamento.entity';
import { Ubicacion } from './entities/ubicacion.entity';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { UpdateUbicacionDto } from './dto/update-ubiacion.dto';

@Injectable()
export class AgendaService {
  constructor(
    @InjectRepository(Agenda)
    private readonly agendaRepository: Repository<Agenda>,

    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>,

    @InjectRepository(Ubicacion)
    private readonly ubicacionRepository: Repository<Ubicacion>,
  ) {}

  async createAgenda(createAgendaDto: CreateAgendaDto) {
    try {
      const newAgenda = this.agendaRepository.create(createAgendaDto);
      console.log(newAgenda);

      return await this.agendaRepository.save(newAgenda);
    } catch (error) {
      console.log(error);
    }
  }

  async createDepartamento(createDepartamentoDto: CreateDepartamentoDto) {
    const newDepartarment = this.departamentoRepository.create(
      createDepartamentoDto,
    );
    return await this.departamentoRepository.save(newDepartarment);
  }
  async createUbicacion(createUbicacionDto: CreateUbicacionDto) {
    const newUbicacion = this.ubicacionRepository.create(createUbicacionDto);
    return await this.ubicacionRepository.save(newUbicacion);
  }

  async findAll(): Promise<Agenda[]> {
    return await this.agendaRepository.find({
      relations: ['departamento', 'ubicacion'],
      order: { directorioID: 'ASC' },
    });
  }

  async findDepartamento(): Promise<Departamento[]> {
    return await this.departamentoRepository.find({
      order: { departamentoID: 'ASC' },
    });
  }

  async finUbicacion(): Promise<Ubicacion[]> {
    return await this.ubicacionRepository.find({
      order: { ubicacionID: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Agenda> {
    const agenda = await this.agendaRepository.findOneBy({ directorioID: id });

    if (!agenda) {
      throw new NotFoundException(`Directorio with id: ${id} no encontrado`);
    }

    return agenda;
  }

  async updateAgenda(id: number, updateAgendaDto: UpdateAgendaDto) {
    await this.agendaRepository.update(id, updateAgendaDto);
    return await this.agendaRepository.findOne({
      where: { directorioID: id },
    });
  }

  async updateDepartamento(
    departamentoID: number,
    updateDepartamentoDto: UpdateDepartamentoDto,
  ) {
    await this.departamentoRepository.update(
      departamentoID,
      updateDepartamentoDto,
    );
    return await this.departamentoRepository.findOne({
      where: { departamentoID: departamentoID },
    });
  }

  async updateUbicacion(
    ubicacionID: number,
    updateUbicacionDto: UpdateUbicacionDto,
  ) {
    await this.ubicacionRepository.update(ubicacionID, updateUbicacionDto);
    return await this.ubicacionRepository.findOneBy({ ubicacionID });
  }

  remove(id: number) {
    return `This action removes a #${id} agenda`;
  }
}
