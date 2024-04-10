/*
  Warnings:

  - You are about to drop the column `employeeId` on the `positions` table. All the data in the column will be lost.
  - You are about to drop the column `employeeId` on the `shifts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `positions` DROP FOREIGN KEY `positions_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `shifts` DROP FOREIGN KEY `shifts_employeeId_fkey`;

-- AlterTable
ALTER TABLE `employees` ADD COLUMN `positionId` INTEGER NULL,
    ADD COLUMN `shiftId` INTEGER NULL;

-- AlterTable
ALTER TABLE `positions` DROP COLUMN `employeeId`;

-- AlterTable
ALTER TABLE `shifts` DROP COLUMN `employeeId`;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_positionId_fkey` FOREIGN KEY (`positionId`) REFERENCES `positions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_shiftId_fkey` FOREIGN KEY (`shiftId`) REFERENCES `shifts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
