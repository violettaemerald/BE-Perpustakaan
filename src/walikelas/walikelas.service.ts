import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateWalikelasDto } from './dto/create-walikelas.dto.js'
import { UpdateWalikelasDto } from './dto/update-walikelas.dto.js'
import { PrismaService } from '../../prisma/prisma.service.js'

@Injectable()
export class WalikelasService {
  constructor (private prisma: PrismaService) {}

  async create (dto: CreateWalikelasDto) {
    return this.prisma.waliKelas.create({ data: dto })
  }

  async findAll () {
    return this.prisma.waliKelas.findMany({ orderBy: { id_WaliKelas: 'desc' } })
  }

  async findOne (id_WaliKelas: number) {
    const waliKelas = await this.prisma.waliKelas.findUnique({ where: { id_WaliKelas } })

    if (!waliKelas) throw new NotFoundException('waliKelas not found')
    return waliKelas
  }

  async update(id_WaliKelas: number, dto: UpdateWalikelasDto) {
    // pastikan ada dulu
    await this.findOne(id_WaliKelas);
    return this.prisma.waliKelas.update({
      where: { id_WaliKelas },
      data: dto,
    });
  }


  async remove(id_WaliKelas: number) {
    // pastikan ada dulu
    await this.findOne(id_WaliKelas);
    return this.prisma.waliKelas.delete({ where: { id_WaliKelas } });
  }
}
