-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `nickName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL DEFAULT '',
    `phone` VARCHAR(191) NULL DEFAULT '',
    `gender` INTEGER NULL DEFAULT 1,
    `status` INTEGER NULL DEFAULT 1,
    `avatar` VARCHAR(191) NULL DEFAULT '',
    `remark` VARCHAR(191) NULL DEFAULT '',
    `loginDate` DATETIME(3) NULL,
    `loginIp` VARCHAR(191) NULL DEFAULT '',
    `deptId` INTEGER NULL,
    `createBy` VARCHAR(191) NULL,
    `updateBy` VARCHAR(191) NULL,
    `createTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateTime` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `status` INTEGER NULL DEFAULT 1,
    `remark` VARCHAR(191) NULL DEFAULT '',
    `createBy` VARCHAR(191) NULL,
    `updateBy` VARCHAR(191) NULL,
    `createTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateTime` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Role_name_key`(`name`),
    UNIQUE INDEX `Role_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `status` INTEGER NULL DEFAULT 1,
    `sort` INTEGER NULL DEFAULT 0,
    `phone` VARCHAR(191) NULL DEFAULT '',
    `email` VARCHAR(191) NULL DEFAULT '',
    `principal` VARCHAR(191) NULL DEFAULT '',
    `remark` VARCHAR(191) NULL DEFAULT '',
    `parentId` INTEGER NULL,
    `createBy` VARCHAR(191) NULL,
    `updateBy` VARCHAR(191) NULL,
    `createTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateTime` DATETIME(3) NOT NULL,

    UNIQUE INDEX `department_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `sort` INTEGER NULL DEFAULT 0,
    `status` INTEGER NULL DEFAULT 1,
    `remark` VARCHAR(191) NULL DEFAULT '',
    `createBy` VARCHAR(191) NULL,
    `updateBy` VARCHAR(191) NULL,
    `createTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateTime` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Post_name_key`(`name`),
    UNIQUE INDEX `Post_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `menuType` INTEGER NOT NULL DEFAULT 0,
    `title` VARCHAR(191) NULL DEFAULT '',
    `name` VARCHAR(191) NULL DEFAULT '',
    `path` VARCHAR(191) NULL DEFAULT '',
    `component` VARCHAR(191) NULL DEFAULT '',
    `rank` INTEGER NULL DEFAULT 0,
    `redirect` VARCHAR(191) NULL DEFAULT '',
    `icon` VARCHAR(191) NULL DEFAULT '',
    `extraIcon` VARCHAR(191) NULL DEFAULT '',
    `enterTransition` VARCHAR(191) NULL DEFAULT '',
    `leaveTransition` VARCHAR(191) NULL DEFAULT '',
    `activePath` VARCHAR(191) NULL DEFAULT '',
    `auths` VARCHAR(191) NULL DEFAULT '',
    `frameSrc` VARCHAR(191) NULL DEFAULT '',
    `frameLoading` BOOLEAN NOT NULL DEFAULT true,
    `keepAlive` BOOLEAN NOT NULL DEFAULT false,
    `hiddenTag` BOOLEAN NOT NULL DEFAULT false,
    `fixedTag` BOOLEAN NOT NULL DEFAULT false,
    `showLink` BOOLEAN NOT NULL DEFAULT true,
    `showParent` BOOLEAN NOT NULL DEFAULT false,
    `parentId` INTEGER NULL DEFAULT 0,
    `createBy` VARCHAR(191) NULL,
    `updateBy` VARCHAR(191) NULL,
    `createTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateTime` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LoginLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ip` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `browser` VARCHAR(191) NULL,
    `os` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `msg` VARCHAR(191) NULL,
    `userId` INTEGER NOT NULL,
    `loginTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OperationLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `module` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `method` VARCHAR(191) NULL,
    `requestUrl` VARCHAR(191) NULL,
    `params` JSON NULL,
    `response` JSON NULL,
    `ip` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `status` INTEGER NULL DEFAULT 1,
    `errorMsg` VARCHAR(191) NULL,
    `operationTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DictType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `remark` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `DictType_name_key`(`name`),
    UNIQUE INDEX `DictType_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DictData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dictTypeId` INTEGER NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `sort` INTEGER NOT NULL DEFAULT 0,
    `status` INTEGER NOT NULL DEFAULT 1,
    `remark` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `File` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `size` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `userId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserToRole` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_UserToRole_AB_unique`(`A`, `B`),
    INDEX `_UserToRole_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserToPost` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_UserToPost_AB_unique`(`A`, `B`),
    INDEX `_UserToPost_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_RoleToMenu` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_RoleToMenu_AB_unique`(`A`, `B`),
    INDEX `_RoleToMenu_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_deptId_fkey` FOREIGN KEY (`deptId`) REFERENCES `department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `department` ADD CONSTRAINT `department_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `menu` ADD CONSTRAINT `menu_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `menu`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LoginLog` ADD CONSTRAINT `LoginLog_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OperationLog` ADD CONSTRAINT `OperationLog_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DictData` ADD CONSTRAINT `DictData_dictTypeId_fkey` FOREIGN KEY (`dictTypeId`) REFERENCES `DictType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `File` ADD CONSTRAINT `File_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserToRole` ADD CONSTRAINT `_UserToRole_A_fkey` FOREIGN KEY (`A`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserToRole` ADD CONSTRAINT `_UserToRole_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserToPost` ADD CONSTRAINT `_UserToPost_A_fkey` FOREIGN KEY (`A`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserToPost` ADD CONSTRAINT `_UserToPost_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RoleToMenu` ADD CONSTRAINT `_RoleToMenu_A_fkey` FOREIGN KEY (`A`) REFERENCES `menu`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RoleToMenu` ADD CONSTRAINT `_RoleToMenu_B_fkey` FOREIGN KEY (`B`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
