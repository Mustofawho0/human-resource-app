-- AlterTable
ALTER TABLE `attendances` ADD COLUMN `shiftId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `attendances` ADD CONSTRAINT `attendances_shiftId_fkey` FOREIGN KEY (`shiftId`) REFERENCES `shifts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
