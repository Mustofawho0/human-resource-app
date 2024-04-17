/*
  Warnings:

  - You are about to alter the column `clockin` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `clockout` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `attendances` MODIFY `clockin` DATETIME NULL,
    MODIFY `clockout` DATETIME NULL;

-- AlterTable
ALTER TABLE `leaverequests` MODIFY `startDate` DATE NULL,
    MODIFY `endDate` DATE NULL,
    MODIFY `status` VARCHAR(191) NULL,
    MODIFY `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NULL;
