/*
  Warnings:

  - You are about to alter the column `clockin` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `clockout` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `attendances` ADD COLUMN `shiftId` INTEGER NULL,
    MODIFY `clockin` DATETIME NULL,
    MODIFY `clockout` DATETIME NULL;

-- AddForeignKey
ALTER TABLE `attendances` ADD CONSTRAINT `attendances_shiftId_fkey` FOREIGN KEY (`shiftId`) REFERENCES `shifts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
