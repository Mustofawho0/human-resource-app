/*
  Warnings:

  - You are about to alter the column `clockin` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `clockout` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `employeeId` to the `leaverequests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `attendances` MODIFY `clockin` DATETIME NULL,
    MODIFY `clockout` DATETIME NULL;

-- AlterTable
ALTER TABLE `employees` ADD COLUMN `leaveRequestId` INTEGER NULL;

-- AlterTable
ALTER TABLE `leaverequests` ADD COLUMN `employeeId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_leaveRequestId_fkey` FOREIGN KEY (`leaveRequestId`) REFERENCES `leaverequests`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
