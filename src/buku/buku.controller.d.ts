import { BukuService } from './buku.service.js';
import { CreateBukuDto } from './dto/create-buku,dto.js';
import { UpdateBukuDto } from './dto/update-buku.dto.js';
export declare class BukuController {
    private readonly BukuService;
    constructor(BukuService: BukuService);
    create(dto: CreateBukuDto): Promise<{
        judul: string;
        penulis: string;
        tahun: string;
        createdAt: Date;
        updatedAt: Date;
        id_buku: number;
    }>;
    findAll(): Promise<{
        judul: string;
        penulis: string;
        tahun: string;
        createdAt: Date;
        updatedAt: Date;
        id_buku: number;
    }[]>;
    findByJudul(judul: string): Promise<{
        judul: string;
        penulis: string;
        tahun: string;
        createdAt: Date;
        updatedAt: Date;
        id_buku: number;
    }[]>;
    findById(id: string): Promise<{
        judul: string;
        penulis: string;
        tahun: string;
        createdAt: Date;
        updatedAt: Date;
        id_buku: number;
    }>;
    update(id: string, dto: UpdateBukuDto): Promise<{
        judul: string;
        penulis: string;
        tahun: string;
        createdAt: Date;
        updatedAt: Date;
        id_buku: number;
    }>;
    remove(id: string): Promise<{
        judul: string;
        penulis: string;
        tahun: string;
        createdAt: Date;
        updatedAt: Date;
        id_buku: number;
    }>;
}
