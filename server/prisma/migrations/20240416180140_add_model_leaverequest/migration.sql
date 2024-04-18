/*
  Warnings:

  - You are about to alter the column `clockin` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `clockout` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `attendances` MODIFY `clockin` DATETIME NULL,
    MODIFY `clockout` DATETIME NULL;

-- CreateTable
CREATE TABLE `leaverequests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `startDate` DATE NOT NULL,
    `endDate` DATE NOT NULL,
    `reason` VARCHAR(100) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
