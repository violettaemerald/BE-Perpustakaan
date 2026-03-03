import { UserRole } from "@prisma/client";

export class UpdateStudentDto {
    nis?: string;
    name?: string;
    email?: string;
    password?: string;
    UserRole?: UserRole;
    kelas?: string;
    jurusan?: string;
}