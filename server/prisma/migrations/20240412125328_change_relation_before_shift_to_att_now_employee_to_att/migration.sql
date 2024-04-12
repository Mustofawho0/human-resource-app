/*
  Warnings:

  - You are about to drop the column `shiftId` on the `attendances` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `attendances` DROP FOREIGN KEY `attendances_shiftId_fkey`;

-- AlterTable
ALTER TABLE `attendances` DROP COLUMN `shiftId`,
    ADD COLUMN `employeeId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `attendances` ADD CONSTRAINT `attendances_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `employees`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
