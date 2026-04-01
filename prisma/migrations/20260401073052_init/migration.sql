-- CreateEnum
CREATE TYPE "StatusPeminjaman" AS ENUM ('dipinjam', 'dikembalikan', 'terlambat');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('admin', 'petugas', 'member');

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "nis" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "UserRole" "UserRole" NOT NULL,
    "kelas" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaliKelas" (
    "id_WaliKelas" SERIAL NOT NULL,
    "name_WaliKelas" TEXT NOT NULL,
    "no_telp" TEXT,
    "mapel" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaliKelas_pkey" PRIMARY KEY ("id_WaliKelas")
);

-- CreateTable
CREATE TABLE "Buku" (
    "id_buku" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "penulis" TEXT NOT NULL,
    "tahun" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Buku_pkey" PRIMARY KEY ("id_buku")
);

-- CreateTable
CREATE TABLE "Peminjaman" (
    "id_peminjaman" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "buku_id" INTEGER NOT NULL,
    "tanggalPeminjaman" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "batasKembali" TIMESTAMP(3) NOT NULL,
    "status" "StatusPeminjaman" NOT NULL,

    CONSTRAINT "Peminjaman_pkey" PRIMARY KEY ("id_peminjaman")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_nis_key" ON "Student"("nis");

-- CreateIndex
CREATE UNIQUE INDEX "Student_name_key" ON "Student"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "WaliKelas_no_telp_key" ON "WaliKelas"("no_telp");

-- CreateIndex
CREATE UNIQUE INDEX "Buku_judul_key" ON "Buku"("judul");

-- AddForeignKey
ALTER TABLE "Peminjaman" ADD CONSTRAINT "Peminjaman_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peminjaman" ADD CONSTRAINT "Peminjaman_buku_id_fkey" FOREIGN KEY ("buku_id") REFERENCES "Buku"("id_buku") ON DELETE RESTRICT ON UPDATE CASCADE;
