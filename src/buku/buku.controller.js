var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { BukuService } from './buku.service.js';
import { CreateBukuDto } from './dto/create-buku,dto.js';
import { UpdateBukuDto } from './dto/update-buku.dto.js';
import { JwtAuthGuard } from '/TUGAS RPL KELAS XI (2)/nestjs + prisma/nest_prisma/src/auth/guards/jwt-auth.guard.js';
import { Roles } from 'src/auth/decorators/roles.decorator.js';
import { RoleGuard } from 'src/auth/guards/roles.guard.js';
import { UserRole } from '@prisma/client';
let BukuController = class BukuController {
    BukuService;
    constructor(BukuService) {
        this.BukuService = BukuService;
    }
    create(dto) {
        return this.BukuService.create(dto);
    }
    findAll() {
        return this.BukuService.findAll();
    }
    findByJudul(judul) {
        return this.BukuService.findByJudul(String(judul));
    }
    findById(id) {
        return this.BukuService.findById(Number(id));
    }
    update(id, dto) {
        return this.BukuService.update(Number(id), dto);
    }
    remove(id) {
        return this.BukuService.remove(Number(id));
    }
};
__decorate([
    UseGuards(JwtAuthGuard, RoleGuard),
    Roles(UserRole.admin),
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateBukuDto]),
    __metadata("design:returntype", void 0)
], BukuController.prototype, "create", null);
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BukuController.prototype, "findAll", null);
__decorate([
    Get('judul/:judul'),
    __param(0, Param('judul')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BukuController.prototype, "findByJudul", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BukuController.prototype, "findById", null);
__decorate([
    Put(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateBukuDto]),
    __metadata("design:returntype", void 0)
], BukuController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BukuController.prototype, "remove", null);
BukuController = __decorate([
    Controller('Buku'),
    __metadata("design:paramtypes", [BukuService])
], BukuController);
export { BukuController };
//# sourceMappingURL=buku.controller.js.map