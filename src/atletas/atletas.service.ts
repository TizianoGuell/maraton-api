import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';
import { Atleta } from './entities/atleta.entity';
import { CreateAtletaDto } from './dto/create-atleta.dto';
import { UpdateAtletaDto } from './dto/update-atleta.dto';
import { Ciudad } from 'src/ciudades/entities/ciudad.entity';

@Injectable()
export class AtletaService {
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Atleta)
    private repo: Repository<Atleta>,
    @InjectRepository(Ciudad)
    private ciudadRepo: Repository<Ciudad>,
  ) {}

  findAll() {
    return this.repo.find(); // gracias a eager:true trae ciudad incluida
  }

  async create(dto: CreateAtletaDto) {
    const exist = await this.repo.findOne({ where: { dni: dto.dni } });
    if (exist) throw new BadRequestException('DNI ya registrado');

    const ciudad = await this.ciudadRepo.findOne({ where: { id: dto.ciudadId } });
    if (!ciudad) throw new BadRequestException('Ciudad no válida');

    const atleta = this.repo.create(dto);
    return this.repo.save(atleta);
  }

  async update(id: number, dto: UpdateAtletaDto) {
    const atleta = await this.repo.findOne({ where: { id } });
    if (!atleta) throw new NotFoundException('Atleta no encontrado');

    if (dto.dni) {
      const exist = await this.repo.findOne({ where: { dni: dto.dni, id: Not(id) } });
      if (exist) throw new BadRequestException('DNI ya registrado por otro atleta');
    }

    if (dto.ciudadId) {
      const ciudad = await this.ciudadRepo.findOne({ where: { id: dto.ciudadId } });
      if (!ciudad) throw new BadRequestException('Ciudad no válida');
    }

    Object.assign(atleta, dto);
    return this.repo.save(atleta);
  }

  async remove(id: number) {
    const atleta = await this.repo.findOne({ where: { id } });
    if (!atleta) throw new NotFoundException('Atleta no encontrado');
    return this.repo.remove(atleta);
  }
}
