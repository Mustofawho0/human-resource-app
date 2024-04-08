/*
  Warnings:

  - You are about to drop the column `startShift` on the `shifts` table. All the data in the column will be lost.
  - You are about to alter the column `endShift` on the `shifts` table. The data in that column could be lost. The data in that column will be cast from `Time(0)` to `DateTime(3)`.
  - Added the required column `starShift` to the `shifts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shifts` DROP COLUMN `startShift`,
    ADD COLUMN `starShift` DATETIME(3) NOT NULL,
    MODIFY `endShift` DATETIME(3) NOT NULL;
