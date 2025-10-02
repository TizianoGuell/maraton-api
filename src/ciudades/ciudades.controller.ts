import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CiudadService } from './ciudades.service';
import { CreateCiudadDto } from './dto/create-ciudade.dto';
import { UpdateCiudadDto } from './dto/update-ciudade.dto';

@Controller('ciudades')
export class CiudadController {
  constructor(private readonly service: CiudadService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }
  @Post()
  create(@Body() dto: CreateCiudadDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateCiudadDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
