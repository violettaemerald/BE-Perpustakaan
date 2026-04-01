-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: prisma_nest
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('0fba9b00-8a90-45aa-ba0d-392cd3c3dbf3','4031b10173b9c8e628ee6d2ede5a7178c42340bfb1beb62938dea4334a83c635','2026-01-30 07:00:41.263','20260123064038_buku',NULL,NULL,'2026-01-30 07:00:41.243',1),('1dc28596-353b-4978-8d8d-fc44708dae23','9d88dbe0a5d47286ae2ba3be7d0206b2e1a33661ed83f471734ab858a4a8e777','2026-01-30 07:00:41.359','20260128022441_peminjaman',NULL,NULL,'2026-01-30 07:00:41.265',1),('796cf0a8-249c-4044-8ad1-3a997b0f3117','d023c813189934af5d2c0437aaf2082fbd6036d903bd9aa2666fea99ed81073b','2026-01-30 07:00:41.375','20260130065839',NULL,NULL,'2026-01-30 07:00:41.360',1),('838f9d4f-97ae-4594-9d5e-cf10f57ca1f0','14995afb7cf88560cda99cb714cf1d873df3c8fe7747fc5dc7a7e5797bcd375e','2026-01-30 07:00:41.230','20260109063325_wali_kelas',NULL,NULL,'2026-01-30 07:00:41.201',1),('83dad4df-a63b-4efc-852a-456748f29cf1','2af337944ce8b6cc28fea4153a63f79fbeb21a9a3bbb38096258727f29aea083','2026-01-30 07:00:41.242','20260121034224_buku',NULL,NULL,'2026-01-30 07:00:41.231',1),('ed395a40-da4b-49d9-aec4-e773b0615816','dc19fe97df1840748649363cb11b6b95a2209a4f20572ff159873dfd2d8335e7','2026-01-30 07:00:41.198','20260109032136_student',NULL,NULL,'2026-01-30 07:00:41.169',1),('f235b4ec-ff8b-4b8f-9560-5bd758ecc128','763e9e532a1f0b287aa2ac306786ec865e1d02f51aef4a250693f917df8ef964','2026-02-05 01:04:19.893','20260205010419',NULL,NULL,'2026-02-05 01:04:19.859',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `buku`
--

DROP TABLE IF EXISTS `buku`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `buku` (
  `id_buku` int(11) NOT NULL AUTO_INCREMENT,
  `judul` varchar(191) NOT NULL,
  `penulis` varchar(191) NOT NULL,
  `tahun` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id_buku`),
  UNIQUE KEY `Buku_judul_key` (`judul`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buku`
--

LOCK TABLES `buku` WRITE;
/*!40000 ALTER TABLE `buku` DISABLE KEYS */;
INSERT INTO `buku` VALUES (1,'Dasar Frontend Development','david bayu','2023','2026-02-03 04:52:35.286','2026-03-04 04:42:36.821'),(3,'Dasar Backend Development','david bayu','2023','2026-03-04 04:31:07.297','2026-03-04 04:31:07.297');
/*!40000 ALTER TABLE `buku` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peminjaman`
--

DROP TABLE IF EXISTS `peminjaman`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `peminjaman` (
  `id_peminjaman` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `buku_id` int(11) NOT NULL,
  `tanggalPeminjaman` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `batasKembali` datetime(3) NOT NULL,
  `status` enum('dipinjam','dikembalikan','terlambat') NOT NULL,
  PRIMARY KEY (`id_peminjaman`),
  KEY `Peminjaman_student_id_fkey` (`student_id`),
  KEY `Peminjaman_buku_id_fkey` (`buku_id`),
  CONSTRAINT `Peminjaman_buku_id_fkey` FOREIGN KEY (`buku_id`) REFERENCES `buku` (`id_buku`) ON UPDATE CASCADE,
  CONSTRAINT `Peminjaman_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peminjaman`
--

LOCK TABLES `peminjaman` WRITE;
/*!40000 ALTER TABLE `peminjaman` DISABLE KEYS */;
INSERT INTO `peminjaman` VALUES (1,1,1,'2026-02-05 01:28:14.188','2026-02-10 01:28:14.183','dikembalikan'),(2,4,1,'2026-02-05 01:42:59.675','2026-02-10 01:42:59.673','dipinjam');
/*!40000 ALTER TABLE `peminjaman` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nis` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) DEFAULT NULL,
  `kelas` varchar(191) NOT NULL,
  `jurusan` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `UserRole` enum('admin','petugas','member') NOT NULL,
  `password` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Student_nis_key` (`nis`),
  UNIQUE KEY `Student_name_key` (`name`),
  UNIQUE KEY `Student_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'12346','Violet','Violet@email.com','xi rpl 4','rpl','2026-02-03 04:30:47.059','2026-02-03 04:30:47.059','member','violet1234'),(2,'12347','Charissa','Charissa@email.com','xi rpl 4','rpl','2026-02-04 01:44:08.942','2026-02-04 01:44:08.942','member','$2b$10$EUsJmAzfUiRQmQUDkhA4Ee69ZGQfbUGWOBVYQYOXI0iufojL7s1km'),(4,'12348','Agnes','agnes@email.com','xi rpl 4','rpl','2026-02-04 02:14:15.527','2026-02-04 02:14:15.527','admin','$2b$10$4Bnz.XJHXfb1BziYYbC2tuPsuuhXUh2/t/N6cWs./yh5./Yepds.i');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `walikelas`
--

DROP TABLE IF EXISTS `walikelas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `walikelas` (
  `id_WaliKelas` int(11) NOT NULL AUTO_INCREMENT,
  `name_WaliKelas` varchar(191) NOT NULL,
  `no_telp` varchar(191) DEFAULT NULL,
  `mapel` varchar(191) NOT NULL,
  `alamat` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id_WaliKelas`),
  UNIQUE KEY `WaliKelas_no_telp_key` (`no_telp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `walikelas`
--

LOCK TABLES `walikelas` WRITE;
/*!40000 ALTER TABLE `walikelas` DISABLE KEYS */;
/*!40000 ALTER TABLE `walikelas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-01 14:05:33
