import { Test, TestingModule } from '@nestjs/testing';
import { WalikelasController } from './walikelas.controller.js';

describe('WalikelasController', () => {
  let controller: WalikelasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalikelasController],
    }).compile();

    controller = module.get<WalikelasController>(WalikelasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
