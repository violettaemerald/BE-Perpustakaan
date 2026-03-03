import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { BukuService } from './buku.service.js';
import { CreateBukuDto } from './dto/create-buku,dto.js';
import { UpdateBukuDto } from './dto/update-buku.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { RoleGuard } from '../auth/guards/roles.guard.js';
import { UserRole } from '@prisma/client';


@Controller('Buku')
export class BukuController {
  constructor(private readonly BukuService: BukuService) {}
  
  @Post()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas)
  create(@Body() dto: CreateBukuDto) {
    return this.BukuService.create(dto);
  }
  
  
  @Get()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas, UserRole.member)
  findAll() {
    return this.BukuService.findAll();
  }
  
  @Get('judul/:judul')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas, UserRole.member)
  findByJudul(@Param('judul') judul: string) {
    return this.BukuService.findByJudul(String(judul))
  }
  
  @Get(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas, UserRole.member)
  findById(@Param('id') id: string) {
    return this.BukuService.findById(Number(id));
  }
  
  @Put(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas)
  update(@Param('id') id: string, @Body() dto: UpdateBukuDto) {
    return this.BukuService.update(Number(id), dto);
  }
  
  
  @Delete(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin)
  remove(@Param('id') id: string) {
    return this.BukuService.remove(Number(id));
  }
}
