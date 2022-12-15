/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/notification-repository";
import { NotificationNotFound } from "./errors/notifications-not-found";

interface CancelNotificationRequest {
    notificationId: string; 
}

type CancelNotificationResponse = void;


@Injectable()//decorator
export class CancelNotification {
    constructor(private notificationRepository: NotificationRepository) {}

    async execute(
        request: CancelNotificationRequest,
    ): Promise<CancelNotificationResponse> {
        const { notificationId } = request;

        const notification = await this.notificationRepository.findById(notificationId);

        if (!notification) {
            throw new NotificationNotFound();
        }

        notification.cancel();

        await this.notificationRepository.save(notification);
    }
}
