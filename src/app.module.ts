import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from '../prisma/prisma.module.js';
import { StudentsModule } from './students/students.module.js';
import { WalikelasModule } from './walikelas/walikelas.module.js';
import { BukuModule } from './buku/buku.module.js';
import { PeminjamanService } from './peminjaman/peminjaman.service.js';
import { PeminjamanController } from './peminjaman/peminjaman.controller.js';
import { PeminjamanModule } from './peminjaman/peminjaman.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
    envFilePath:
    process.env.NODE_ENV === 'production'
    ? '.env.production'
    : '.env',
  }),
    PrismaModule, StudentsModule, WalikelasModule, BukuModule, PeminjamanModule, AuthModule],
  providers: [PeminjamanService],
  controllers: [PeminjamanController],
})
export class AppModule {}

