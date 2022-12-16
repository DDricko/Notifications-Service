/* eslint-disable prettier/prettier */
import { CancelNotification } from "./cancel-notification";
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { Notification } from "@application/entities/notification";
import { Content } from "@application/entities/content";
import { NotificationNotFound } from "./errors/notifications-not-found";
import { CountRecipientNotification } from "./count-recipient-notification";

describe('Count recipient notifications', () => {
    it('should be able to count recipient notifications', async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const countRecipientNotification = new CountRecipientNotification(notificationRepository);

        await notificationRepository.create(
            new Notification({
                category: 'social',
                content: new Content('Nova solicitação de amizade!'),
                recipientId: 'recipient-1',
            }),
        );

        await notificationRepository.create(
            new Notification({
                category: 'social',
                content: new Content('Nova solicitação de amizade!'),
                recipientId: 'recipient-1',
            }),
        );

        await notificationRepository.create(
            new Notification({
                category: 'social',
                content: new Content('Nova solicitação de amizade!'),
                recipientId: 'recipient-2',
            }),
        );

        const { count } = await countRecipientNotification.execute({ recipientId: 'recipient-1' });

        expect(count).toEqual(2);
    });
});