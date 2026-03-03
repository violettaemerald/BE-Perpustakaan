-- CreateTable
CREATE TABLE `Peminjaman` (
    `id_peminjaman` INTEGER NOT NULL AUTO_INCREMENT,
    `student_id` INTEGER NOT NULL,
    `buku_id` INTEGER NOT NULL,
    `tanggalPeminjaman` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `batasKembali` DATETIME(3) NOT NULL,
    `status` ENUM('dipinjam', 'dikembalikan', 'terlambat') NOT NULL,

    PRIMARY KEY (`id_peminjaman`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Peminjaman` ADD CONSTRAINT `Peminjaman_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Peminjaman` ADD CONSTRAINT `Peminjaman_buku_id_fkey` FOREIGN KEY (`buku_id`) REFERENCES `Buku`(`id_buku`) ON DELETE RESTRICT ON UPDATE CASCADE;
