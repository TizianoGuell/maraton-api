import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudad } from './entities/ciudad.entity';
import { CreateCiudadDto } from './dto/create-ciudade.dto';
import { UpdateCiudadDto } from './dto/update-ciudade.dto';

@Injectable()
export class CiudadService {
  constructor(
    @InjectRepository(Ciudad)
    private repo: Repository<Ciudad>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  async create(dto: CreateCiudadDto) {
    const ciudad = this.repo.create(dto);
    return this.repo.save(ciudad);
  }

  async update(id: number, dto: UpdateCiudadDto) {
    const ciudad = await this.repo.findOne({ where: { id } });
    if (!ciudad) throw new NotFoundException('Ciudad no encontrada');
    Object.assign(ciudad, dto);
    return this.repo.save(ciudad);
  }

  async remove(id: number) {
    const ciudad = await this.repo.findOne({ where: { id } });
    if (!ciudad) throw new NotFoundException('Ciudad no encontrada');
    return this.repo.remove(ciudad);
  }
}