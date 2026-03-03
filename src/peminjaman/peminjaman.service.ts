import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service.js'
import { CreatePinjamDto } from './dto/create-pinjam.dto.js'

@Injectable()
export class PeminjamanService {
  constructor (private prisma: PrismaService) {}

  async create (dto: CreatePinjamDto) {
    const unavailable = await this.prisma.peminjaman.findFirst({
      where: {
        buku_id: dto.buku_id,
        status: 'dipinjam'
      }
    })

    if (unavailable) {
      throw new BadRequestException('Buku sedang dipinjam')
    }

    const now = new Date()
    const batasKembali = new Date(now)
    batasKembali.setDate(now.getDate() + 5)

    return this.prisma.peminjaman.create({ data: {
      status: 'dipinjam',
      batasKembali,

      student: {
        connect: { id: dto.student_id },
      },
      buku: {
        connect: { id_buku: dto.buku_id },
      },
    }, })
  }

  async findAll () {
    return this.prisma.peminjaman.findMany({ orderBy: { id_peminjaman: 'desc' } })
  }

  async findOne (id: number) {
    const peminjaman = await this.prisma.peminjaman.findUnique({
      where: { id_peminjaman: id },
    })
    if (!peminjaman) throw new NotFoundException('Peminjaman not found')
    return peminjaman
  }

  async findByTanggal (tanggal: string) {
    const start = new Date(tanggal);
    const end = new Date(tanggal);

    end.setDate(start.getDate() + 1);

    const result= await this.prisma.peminjaman.findMany({
      where: {
        tanggalPeminjaman: {
          gte: start,
          lt: end,
        }
      },
        orderBy: {
          tanggalPeminjaman: 'desc',
        },
        include: {
          student: true,
          buku: true,
        }
      })

    if (result.length === 0) {
      throw new NotFoundException('Tidak ada peminjaman!')
    }

    return result;
  }

  async pengembalian(id: number) {
    const peminjaman = await this.prisma.peminjaman.findUnique({
      where: { id_peminjaman: id }
    })

    if (!peminjaman) {
      throw new NotFoundException('Peminjaman tidak ditemukan')
    }

    if (peminjaman.status !== 'dipinjam') {
      throw new BadRequestException('Buku sudah dikembalikan')
    }

    return this.prisma.peminjaman.update({
      where: {id_peminjaman: id},
      data: { status: 'dikembalikan',}
    })
  }
}
