import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WalikelasService } from './walikelas.service.js';
import { CreateWalikelasDto } from './dto/create-walikelas.dto.js';
import { UpdateWalikelasDto } from './dto/update-walikelas.dto.js';


@Controller('walikelas')
export class WalikelasController {
  constructor(private readonly walikelasService: WalikelasService) {}


  @Post()
  create(@Body() dto: CreateWalikelasDto) {
    return this.walikelasService.create(dto);
  }


  @Get()
  findAll() {
    return this.walikelasService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walikelasService.findOne(Number(id));
  }


  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateWalikelasDto) {
    return this.walikelasService.update(Number(id), dto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walikelasService.remove(Number(id));
  }
}
