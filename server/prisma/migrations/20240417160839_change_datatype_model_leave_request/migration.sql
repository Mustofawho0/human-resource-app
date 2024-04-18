/*
  Warnings:

  - You are about to alter the column `clockin` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `clockout` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Made the column `startDate` on table `leaverequests` required. This step will fail if there are existing NULL values in that column.
  - Made the column `endDate` on table `leaverequests` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `leaverequests` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `leaverequests` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `leaverequests` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `attendances` MODIFY `clockin` DATETIME NULL,
    MODIFY `clockout` DATETIME NULL;

-- AlterTable
ALTER TABLE `leaverequests` MODIFY `startDate` DATE NOT NULL,
    MODIFY `endDate` DATE NOT NULL,
    MODIFY `status` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
