import { Injectable } from '@nestjs/common';
import { CreateAtletaDto } from './dto/create-atleta.dto';
import { UpdateAtletaDto } from './dto/update-atleta.dto';

@Injectable()
export class AtletasService {
  create(createAtletaDto: CreateAtletaDto) {
    return 'This action adds a new atleta';
  }

  findAll() {
    return `This action returns all atletas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} atleta`;
  }

  update(id: number, updateAtletaDto: UpdateAtletaDto) {
    return `This action updates a #${id} atleta`;
  }

  remove(id: number) {
    return `This action removes a #${id} atleta`;
  }
}
