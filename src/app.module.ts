import { Module } from '@nestjs/common';
import { databaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, databaseModule],
})
export class AppModule {}
