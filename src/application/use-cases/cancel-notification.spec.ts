/* eslint-disable prettier/prettier */
import { CancelNotification } from "./cancel-notification";
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { Notification } from "@application/entities/notification";
import { Content } from "@application/entities/content";
import { NotificationNotFound } from "./errors/notifications-not-found";
import { makeNotification } from "@test/factories/notification-factory";

describe('Cancel notification', () => {
    it('should be able to cancel a notification', async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const cancelNotification = new CancelNotification(notificationRepository);

        const notification = makeNotification()

        await notificationRepository.create(notification);

        await cancelNotification.execute({ notificationId: notification.id });

        expect(notificationRepository.notifications[0].canceledAt).toEqual(expect.any(Date));
    });

    it('should not be able to cancel a notification when it does not exists', async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const cancelNotification = new CancelNotification(notificationRepository);
    

        expect(() => {
            return cancelNotification.execute({
                notificationId: 'fake-notification-id',
            });
        }).rejects.toThrow(NotificationNotFound)
       
    });
});