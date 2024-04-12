/*
  Warnings:

  - You are about to drop the column `employeeId` on the `attendances` table. All the data in the column will be lost.
  - You are about to drop the column `leave` on the `employees` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shiftId]` on the table `attendances` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `attendances` DROP FOREIGN KEY `attendances_employeeId_fkey`;

-- AlterTable
ALTER TABLE `attendances` DROP COLUMN `employeeId`,
    ADD COLUMN `shiftId` INTEGER NULL;

-- AlterTable
ALTER TABLE `employees` DROP COLUMN `leave`;

-- CreateIndex
CREATE UNIQUE INDEX `attendances_shiftId_key` ON `attendances`(`shiftId`);

-- AddForeignKey
ALTER TABLE `attendances` ADD CONSTRAINT `attendances_shiftId_fkey` FOREIGN KEY (`shiftId`) REFERENCES `shifts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
