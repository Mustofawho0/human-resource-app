/*
  Warnings:

  - You are about to drop the column `shiftId` on the `attendances` table. All the data in the column will be lost.
  - You are about to alter the column `clockin` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `clockout` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- DropForeignKey
ALTER TABLE `attendances` DROP FOREIGN KEY `attendances_shiftId_fkey`;

-- AlterTable
ALTER TABLE `attendances` DROP COLUMN `shiftId`,
    MODIFY `clockin` DATETIME NULL,
    MODIFY `clockout` DATETIME NULL;
