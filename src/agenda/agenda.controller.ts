import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { UpdateUbicacionDto } from './dto/update-ubiacion.dto';

@Controller('agenda')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Post('/agenda')
  createAgenda(@Body() createAgendaDto: CreateAgendaDto) {
    return this.agendaService.createAgenda(createAgendaDto);
  }

  @Post('/departamento')
  createDepartamento(@Body() createDepartamentoDto: CreateDepartamentoDto) {
    return this.agendaService.createDepartamento(createDepartamentoDto);
  }
  @Post('/ubicacion')
  createUbicacion(@Body() createUbicacionDto: CreateUbicacionDto) {
    return this.agendaService.createUbicacion(createUbicacionDto);
  }

  @Get('/getagenda')
  async findAgenda() {
    return await this.agendaService.findAll();
  }

  @Get('/getdepartamento')
  async findDepartamento() {
    return await this.agendaService.findDepartamento();
  }

  @Get('/getubicacion')
  async findUbicacion() {
    return await this.agendaService.finUbicacion();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agendaService.findOne(+id);
  }

  @Patch(':id')
  updateAgenda(
    @Param('id') id: number,
    @Body() updateAgendaDto: UpdateAgendaDto,
  ) {
    console.log(updateAgendaDto);
    console.log(id);
    return this.agendaService.updateAgenda(+id, updateAgendaDto);
  }

  @Patch('/departamento/:id')
  updateDepartamento(
    @Param('id') id: string,
    @Body() updateDepartamentoDto: UpdateDepartamentoDto,
  ) {
    return this.agendaService.updateDepartamento(+id, updateDepartamentoDto);
  }
  @Patch('/ubicacion/:id')
  updateAubicacion(
    @Param('id') id: string,
    @Body() updateUbicacionDto: UpdateUbicacionDto,
  ) {
    return this.agendaService.updateUbicacion(+id, updateUbicacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agendaService.remove(+id);
  }
}
