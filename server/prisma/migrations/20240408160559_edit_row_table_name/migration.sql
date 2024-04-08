/*
  Warnings:

  - You are about to drop the column `end` on the `shifts` table. All the data in the column will be lost.
  - You are about to drop the column `start` on the `shifts` table. All the data in the column will be lost.
  - Added the required column `endShift` to the `shifts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startShift` to the `shifts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shifts` DROP COLUMN `end`,
    DROP COLUMN `start`,
    ADD COLUMN `endShift` DATETIME(3) NOT NULL,
    ADD COLUMN `startShift` DATETIME(3) NOT NULL;
