import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateStudentDto } from './dto/create-student.dto.js'
import { UpdateStudentDto } from './dto/update-student.dto.js'
import { PrismaService } from '../../prisma/prisma.service.js'
import * as bcrypt from 'bcrypt'


@Injectable()
export class StudentsService {
  
  constructor (private prisma: PrismaService) {}

  async create (dto: CreateStudentDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10)

    return this.prisma.student.create({ data: {
      nis: dto.nis,
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
      UserRole: dto.UserRole,
      kelas: dto.kelas,
      jurusan: dto.jurusan
    } })
  }

  async findAll () {
    return this.prisma.student.findMany({ orderBy: { id: 'desc' } })
  }

  async findOne (id: number) {
    const student = await this.prisma.student.findUnique({ where: { id } })

    if (!student) throw new NotFoundException('Student not found')
    return student
  }

  async findName (name: string) {
    const student = await this.prisma.student.findUnique({ where: { name } })

    if (!student) throw new NotFoundException('Student not found')
    return student
  }

  async findNis (nis: string) {
    const student = await this.prisma.student.findUnique({ where: { nis } })

    if (!student) throw new NotFoundException('Student not found')
    return student
  }

  async update(id: number, dto: UpdateStudentDto) {
    await this.findOne(id);
    return this.prisma.student.update({
      where: { id },
      data: dto,
    });
  }


  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.student.delete({ where: { id } });
  }
}
