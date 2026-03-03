/*
  Warnings:

  - A unique constraint covering the columns `[judul]` on the table `Buku` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Buku_judul_key` ON `Buku`(`judul`);
