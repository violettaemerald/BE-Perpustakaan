import { Module } from '@nestjs/common';
import { BukuService } from './buku.service.js';
import { BukuController } from './buku.controller.js';

// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient()

// prisma.

@Module({
  providers: [BukuService],
  controllers: [BukuController]
})
export class BukuModule {}
