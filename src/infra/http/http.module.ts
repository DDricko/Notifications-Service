/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { databaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { CountRecipientNotification } from '@application/use-cases/count-recipient-notification';
import { GetRecipientNotification } from '@application/use-cases/get-recipient-notification';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';

@Module({
    imports: [databaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotification,
        CancelNotification,
        CountRecipientNotification,
        GetRecipientNotification,
        ReadNotification,
        UnreadNotification,
    ]
})

export class HttpModule {}