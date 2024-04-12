/*
  Warnings:

  - You are about to drop the column `attendanceDate` on the `attendances` table. All the data in the column will be lost.
  - You are about to drop the column `leave` on the `attendances` table. All the data in the column will be lost.
  - You are about to alter the column `clockin` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `Time(0)` to `DateTime`.
  - You are about to alter the column `clockout` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `Time(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `attendances` DROP COLUMN `attendanceDate`,
    DROP COLUMN `leave`,
    MODIFY `clockin` DATETIME NOT NULL,
    MODIFY `clockout` DATETIME NULL,
    MODIFY `deduction` INTEGER NULL;
