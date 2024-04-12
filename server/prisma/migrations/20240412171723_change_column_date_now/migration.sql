/*
  Warnings:

  - You are about to drop the column `dateNow` on the `attendances` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `attendances` DROP COLUMN `dateNow`,
    ADD COLUMN `attendanceDate` DATE NULL;
