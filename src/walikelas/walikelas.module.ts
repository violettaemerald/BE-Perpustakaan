import { Module } from '@nestjs/common';
import { WalikelasService } from './walikelas.service.js';
import { WalikelasController } from './walikelas.controller.js';

@Module({
  providers: [WalikelasService],
  controllers: [WalikelasController]
})
export class WalikelasModule {}
