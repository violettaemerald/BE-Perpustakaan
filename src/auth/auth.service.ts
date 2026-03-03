import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    private prisma = new PrismaClient

    constructor (
        private JwtService: JwtService,
    ) {}

    async login(email: string, password: string) {
        const student = await this.prisma.student.findUnique({
            where: { email }
        });

        if (!student) {
            throw new UnauthorizedException('Email tidak ditemukan!')
        }

        const passwordValid = await bcrypt.compare(password, student.password);
        if (!passwordValid) {
            throw new UnauthorizedException('Password salah!')
        }

        const payload = {
            sub: student.id,
            email: student.email,
            role: student.UserRole
        };

        return {
            message: 'Login berhasil!',
            access_token: this.JwtService.sign(payload)
        }
    }
}
