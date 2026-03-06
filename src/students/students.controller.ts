import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service.js';
import { CreateStudentDto } from './dto/create-student.dto.js';
import { UpdateStudentDto } from './dto/update-student.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { RoleGuard } from '../auth/guards/roles.guard.js';
import { UserRole } from '@prisma/client';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger'

@ApiTags('Student')
@ApiBearerAuth('access-token')


@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}


  @Post()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiOperation({ summary: 'Menambahkan data siswa' })
  create(@Body() dto: CreateStudentDto) {
    return this.studentsService.create(dto);
  }


  @Get()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas, UserRole.member)
  @ApiOperation({ summary: 'Menampilkan data siswa' })
  findAll() {
    return this.studentsService.findAll();
  }


  @Get('nis/:nis')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas, UserRole.member)
  @ApiOperation({ summary: 'Menampilkan data siswa sesuai nis' })
  findNis(@Param('nis') nis: string) {
    return this.studentsService.findNis(String(nis));
  }

  @Get('name/:name')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas, UserRole.member)
  @ApiOperation({ summary: 'Menampilkan data siswa sesuai nama' })
  findName(@Param('name') name: string) {
    return this.studentsService.findName(String(name));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas, UserRole.member)
  @ApiOperation({ summary: 'Menampilkan data siswa sesuai id' })
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(Number(id));
  }


  @Put(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.member)
  @ApiOperation({ summary: 'Memperbarui data siswa' })
  update(@Param('id') id: string, @Body() dto: UpdateStudentDto) {
    return this.studentsService.update(Number(id), dto);
  }


  @Delete(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.member)
  @ApiOperation({ summary: 'Menghapus data siswa' })
  remove(@Param('id') id: string) {
    return this.studentsService.remove(Number(id));
  }
}
