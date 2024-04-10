/*
  Warnings:

  - You are about to drop the column `positionId` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `shiftId` on the `employees` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `employees_positionId_fkey`;

-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `employees_shiftId_fkey`;

-- AlterTable
ALTER TABLE `employees` DROP COLUMN `positionId`,
    DROP COLUMN `shiftId`;

-- AlterTable
ALTER TABLE `positions` ADD COLUMN `employeeId` INTEGER NULL;

-- AlterTable
ALTER TABLE `shifts` ADD COLUMN `employeeId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `positions` ADD CONSTRAINT `positions_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `employees`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shifts` ADD CONSTRAINT `shifts_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `employees`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
