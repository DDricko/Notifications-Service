/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { NotificationRepository } from "@application/repositories/notification-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationRepository } from "./prisma/repository/prisma-notifications-repository";

@Module({
    providers: [
        PrismaService, 
        {
            provide: NotificationRepository,
            useClass: PrismaNotificationRepository,
        }
    ],
    exports: [
        NotificationRepository
    ],
})

export class databaseModule {}