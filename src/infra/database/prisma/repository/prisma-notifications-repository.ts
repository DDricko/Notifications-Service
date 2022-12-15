/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Notification } from "@application/entities/notification";
import { NotificationRepository } from "@application/repositories/notification-repository";
import { PrismaService } from "../prisma.service";

@Injectable()//decorator
export class PrismaNotificationRepository implements NotificationRepository {
constructor(private prismaService: PrismaService) {}

    async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data: {
                id: notification.id,
                category: notification.category,
                content: notification.content.value,
                recipientId: notification.recipientId,
                readAt: notification.readAt,
                createdAt: notification.createdAt,
            },
        });
    }
}