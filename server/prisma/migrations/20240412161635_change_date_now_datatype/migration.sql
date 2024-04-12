-- AlterTable
ALTER TABLE `attendances` MODIFY `clockin` TIME NOT NULL,
    MODIFY `clockout` TIME NULL,
    MODIFY `dateNow` DATE NULL;
