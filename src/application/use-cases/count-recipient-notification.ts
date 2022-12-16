/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/notification-repository";
import { NotificationNotFound } from "./errors/notifications-not-found";

interface CountRecipientNotificationRequest {
    recipientId: string; 
}

interface CountRecipientNotificationResponse {
    count: number;
};


@Injectable()//decorator
export class CountRecipientNotification {
    constructor(private notificationRepository: NotificationRepository) {}

    async execute(
        request: CountRecipientNotificationRequest,
    ): Promise<CountRecipientNotificationResponse> {
        const { recipientId } = request;

        const count = await this.notificationRepository.countManyByRecipientId(recipientId);

        return {
            count
        };
    }
}