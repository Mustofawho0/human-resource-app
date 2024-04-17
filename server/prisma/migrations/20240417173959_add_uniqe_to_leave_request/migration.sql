/*
  Warnings:

  - You are about to alter the column `clockin` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `clockout` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[employeeId]` on the table `leaverequests` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `attendances` MODIFY `clockin` DATETIME NULL,
    MODIFY `clockout` DATETIME NULL;

-- CreateIndex
CREATE UNIQUE INDEX `leaverequests_employeeId_key` ON `leaverequests`(`employeeId`);
