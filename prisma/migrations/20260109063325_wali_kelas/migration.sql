-- CreateTable
CREATE TABLE `WaliKelas` (
    `id_WaliKelas` INTEGER NOT NULL AUTO_INCREMENT,
    `name_WaliKelas` VARCHAR(191) NOT NULL,
    `no_telp` VARCHAR(191) NULL,
    `mapel` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `WaliKelas_no_telp_key`(`no_telp`),
    PRIMARY KEY (`id_WaliKelas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
