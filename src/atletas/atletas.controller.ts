import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AtletaService } from './atletas.service';
import { CreateAtletaDto } from './dto/create-atleta.dto';
import { UpdateAtletaDto } from './dto/update-atleta.dto';


@Controller('atletas')
export class AtletasController {
  constructor(private readonly atletasService: AtletaService) {}

  @Post()
  create(@Body() createAtletaDto: CreateAtletaDto) {
    return this.atletasService.create(createAtletaDto);
  }

  @Get()
  findAll() {
    return this.atletasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atletasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAtletaDto: UpdateAtletaDto) {
    return this.atletasService.update(+id, updateAtletaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atletasService.remove(+id);
  }
}
