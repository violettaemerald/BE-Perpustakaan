import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service.js';
import { CreateStudentDto } from './dto/create-student.dto.js';
import { UpdateStudentDto } from './dto/update-student.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { RoleGuard } from '../auth/guards/roles.guard.js';
import { UserRole } from '@prisma/client';


@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}


  @Post()
  create(@Body() dto: CreateStudentDto) {
    return this.studentsService.create(dto);
  }


  @Get()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas, UserRole.member)
  findAll() {
    return this.studentsService.findAll();
  }


  @Get('nis/:nis')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas, UserRole.member)
  findNis(@Param('nis') nis: string) {
    return this.studentsService.findNis(String(nis));
  }

  @Get('name/:name')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas, UserRole.member)
  findName(@Param('name') name: string) {
    return this.studentsService.findName(String(name));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas, UserRole.member)
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(Number(id));
  }


  @Put(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.member)
  update(@Param('id') id: string, @Body() dto: UpdateStudentDto) {
    return this.studentsService.update(Number(id), dto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(Number(id));
  }
}
