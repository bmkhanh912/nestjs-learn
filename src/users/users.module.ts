import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { GrafanaLogger } from 'src/grafana-logger';
import { ConsoleLogger } from 'src/console-logger';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'Logger',
      useClass:
        process.env.NODE_ENV === 'production' ? GrafanaLogger : ConsoleLogger,
    },
  ],
})
export class UsersModule {}
