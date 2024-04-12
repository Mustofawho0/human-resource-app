/*
  Warnings:

  - You are about to alter the column `leave` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `employees` MODIFY `leave` INTEGER NULL;
