/*
  Warnings:

  - You are about to drop the column `starShift` on the `shifts` table. All the data in the column will be lost.
  - Added the required column `startShift` to the `shifts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shifts` DROP COLUMN `starShift`,
    ADD COLUMN `startShift` DATETIME(3) NOT NULL;
