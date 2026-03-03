import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateBukuDto } from './dto/create-buku,dto.js'
import { UpdateBukuDto } from './dto/update-buku.dto.js'
import { PrismaService } from '../../prisma/prisma.service.js'

@Injectable()
export class BukuService {
  constructor (private prisma: PrismaService) {}

  async create (dto: CreateBukuDto) {
    return this.prisma.buku.create({ data: dto })
  }

  async findAll () {
    return this.prisma.buku.findMany({ orderBy: { id_buku: 'desc' } })
  }

  async findById (id_buku: number) {
    const buku = await this.prisma.buku.findUnique({ where: { id_buku } })

    if (!buku) throw new NotFoundException('Buku not found')
    return buku
  }
 
  async findByJudul(judul: string) {
    const buku = await this.prisma.buku.findMany({
      where: {
        judul: {
          contains: judul
        },
  }});
  
    if (!buku) throw new NotFoundException('Buku not found');
    return buku;
  }
  

  // async findByJudul (judul: string) {
  //   const buku = await this.prisma.buku.findUnique({ where: { judul } })

  //   if (!buku) throw new NotFoundException('Buku not found')
  //   return buku
  // }

  async update(id_buku: number, dto: UpdateBukuDto) {
    // pastikan ada dulu
    await this.findById(id_buku);
    return this.prisma.buku.update({
      where: { id_buku },
      data: dto,
    });
  }


  async remove(id_buku: number) {
    // pastikan ada dulu
    await this.findById(id_buku);
    return this.prisma.buku.delete({ where: { id_buku } });
  }
}
