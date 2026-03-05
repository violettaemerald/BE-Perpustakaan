import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common'
import { BukuService } from './buku.service.js'
import { CreateBukuDto } from './dto/create-buku,dto.js'
import { UpdateBukuDto } from './dto/update-buku.dto.js'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js'
import { Roles } from '../auth/decorators/roles.decorator.js'
import { RoleGuard } from '../auth/guards/roles.guard.js'
import { UserRole } from '@prisma/client'
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger'

@ApiTags('Buku')
@ApiBearerAuth()
@Controller('Buku')
export class BukuController {
  constructor (private readonly BukuService: BukuService) {}

  @Get()
  @ApiOperation({ summary: 'Menampilkan seluruh data buku' })
  findAll () {
    return this.BukuService.findAll()
  }

  @Post()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin)
  @ApiOperation({ summary: 'Menambahkan buku: ADMIN ONLY!' })
  create (@Body() dto: CreateBukuDto) {
    return this.BukuService.create(dto)
  }

  @Get('judul/:judul')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas, UserRole.member)
  @ApiOperation({ summary: 'Menampilkan buku sesuai judul' })
  findByJudul (@Param('judul') judul: string) {
    return this.BukuService.findByJudul(String(judul))
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas, UserRole.member)
  @ApiOperation({ summary: 'Menampilkan data buku sesuai id' })
  findById (@Param('id') id: string) {
    return this.BukuService.findById(Number(id))
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin, UserRole.petugas)
  @ApiOperation({ summary: 'Data berhasil diubah!' })
  update (@Param('id') id: string, @Body() dto: UpdateBukuDto) {
    return this.BukuService.update(Number(id), dto)
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.admin)
  @ApiOperation({ summary: 'Data telah dihapus!' })
  remove (@Param('id') id: string) {
    return this.BukuService.remove(Number(id))
  }
}

// @Get()
// @UseGuards(JwtAuthGuard, RoleGuard)
// @Roles(UserRole.admin, UserRole.petugas, UserRole.member)
// findAll() {
//   return this.BukuService.findAll();
// }

// @Post()
// @UseGuards(JwtAuthGuard, RoleGuard)
// @Roles(UserRole.admin, UserRole.petugas)
// create(@Body() dto: CreateBukuDto) {
//   return this.BukuService.create(dto);
// }
