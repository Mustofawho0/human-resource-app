/*
  Warnings:

  - You are about to drop the column `shiftId` on the `attendances` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[employeeId]` on the table `attendances` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `attendances` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deduction` to the `attendances` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `attendances` DROP FOREIGN KEY `attendances_shiftId_fkey`;

-- AlterTable
ALTER TABLE `attendances` DROP COLUMN `shiftId`,
    ADD COLUMN `date` DATE NOT NULL,
    ADD COLUMN `deduction` INTEGER NOT NULL,
    ADD COLUMN `employeeId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `attendances_employeeId_key` ON `attendances`(`employeeId`);

-- AddForeignKey
ALTER TABLE `attendances` ADD CONSTRAINT `attendances_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `employees`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
