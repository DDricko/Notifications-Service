/* eslint-disable prettier/prettier */
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { Notification } from "@application/entities/notification";
import { Content } from "@application/entities/content";
import { CountRecipientNotification } from "./count-recipient-notification";
import { makeNotification } from "@test/factories/notification-factory";

describe('Count recipient notifications', () => {
    it('should be able to count recipient notifications', async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const countRecipientNotification = new CountRecipientNotification(notificationRepository);

        await notificationRepository.create(makeNotification({ recipientId: 'recipient-1'}));

        await notificationRepository.create(makeNotification({ recipientId: 'recipient-1'}));

        await notificationRepository.create(makeNotification({ recipientId: 'recipient-2'}));

        const { count } = await countRecipientNotification.execute({ recipientId: 'recipient-1' });

        expect(count).toEqual(2);
    });
});