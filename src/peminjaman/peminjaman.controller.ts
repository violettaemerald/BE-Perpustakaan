import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common'
import { PeminjamanService } from './peminjaman.service.js'
import { CreatePinjamDto } from './dto/create-pinjam.dto.js'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js'
import { Roles } from '../auth/decorators/roles.decorator.js'
import { RoleGuard } from '../auth/guards/roles.guard.js'
import { UserRole } from '@prisma/client'
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger'

@ApiTags('Peminjaman')
@ApiBearerAuth()

@Controller('peminjaman')
export class PeminjamanController {
  constructor (private readonly peminjamanService: PeminjamanService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas)
  create (@Body() dto: CreatePinjamDto) {
    return this.peminjamanService.create(dto)
  }

  @Post(':id/pengembalian')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas)
  @ApiOperation({ summary: 'Menampilkan data peminjaman sesuai id' })
  pengembalian (@Param('id', ParseIntPipe) id: number){
    return this.peminjamanService.pengembalian(id)
  }

  @Get()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas)
  @ApiOperation({ summary: 'Menampilkan seluruh data peminjaman' })
  findAll () {
    return this.peminjamanService.findAll()
  }

  @Get('tanggal/:tanggal')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas)
  @ApiOperation({ summary: 'Menampilkan seluruh data peminjaman sesuai tanggal' })
  findByTanggal (@Param('tanggal') tanggal: string) {
    return this.peminjamanService.findByTanggal(String(tanggal))
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas, UserRole.member)
  @ApiOperation({ summary: 'Menampilkan seluruh data peminjaman sesuai id' })
  findOne (@Param('id') id: string) {
    return this.peminjamanService.findOne(Number(id))
  }
}
