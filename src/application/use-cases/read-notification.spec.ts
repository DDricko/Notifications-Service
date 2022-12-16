/* eslint-disable prettier/prettier */
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { NotificationNotFound } from "./errors/notifications-not-found";
import { makeNotification } from "@test/factories/notification-factory";
import { ReadNotification } from "./read-notification";

describe('Read notification', () => {
    it('should be able to read a notification', async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const readNotification = new ReadNotification(notificationRepository);

        const notification = makeNotification()

        await notificationRepository.create(notification);

        await readNotification.execute({ notificationId: notification.id });

        expect(notificationRepository.notifications[0].readAt).toEqual(expect.any(Date));
    });

    it('should not be able to read a notification when it does not exists', async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const readNotification = new ReadNotification(notificationRepository);


        expect(() => {
            return readNotification.execute({
                notificationId: 'fake-notification-id',
            });
        }).rejects.toThrow(NotificationNotFound)

    });
});