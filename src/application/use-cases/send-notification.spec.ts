/* eslint-disable prettier/prettier */
import { SendNotification } from "./send-notification";
import { Notification } from "../entities/notification";

const notifications: Notification[] = [];

const notificationRepository = {
    async create(notification: Notification) {
        notifications.push(notification);
    },
};

describe('Send notification', () => {
    it('should be able to send a notification', async () => {
        const sendNotification = new SendNotification(notificationRepository);

        await sendNotification.execute({
            content: ' you recived a new notification',
            category: 'social',
            recipientId: 'example-recipient-id',
        });

        expect(notifications).toBeTruthy();
    });
});