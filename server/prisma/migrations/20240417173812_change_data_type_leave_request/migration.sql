/*
  Warnings:

  - You are about to alter the column `clockin` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `clockout` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `leaveRequestId` on the `employees` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `employees_leaveRequestId_fkey`;

-- AlterTable
ALTER TABLE `attendances` MODIFY `clockin` DATETIME NULL,
    MODIFY `clockout` DATETIME NULL;

-- AlterTable
ALTER TABLE `employees` DROP COLUMN `leaveRequestId`;

-- AlterTable
ALTER TABLE `leaverequests` MODIFY `employeeId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `leaverequests` ADD CONSTRAINT `leaverequests_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `employees`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
