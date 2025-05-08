import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PostgresEventRepository } from './repositories/postgre-event.repository';
import { ClickhouseEventRepository } from './repositories/clickhouse-event.repository';
import { IEventRepository } from './interfaces/IEventRepository';
import { ILogger } from 'src/interfaces/logger.interface';
import { GrafanaLogger } from 'src/grafana-logger';
import { ConsoleLogger } from 'src/console-logger';

@Injectable()
export class UsersService {
  constructor(@Inject('Logger') private readonly logger: ILogger) {}
  async findUserLog() {
    const EVENT_REPO: IEventRepository = new PostgresEventRepository();

    return await EVENT_REPO.findAll();
  }

  async getUserRecentLogs() {
    // Gọi phương thức `findUserLog` từ `userClickhouseRepository` để lấy các logs gần đây của người dùng.
    const EVENT_REPO: IEventRepository = new ClickhouseEventRepository();
    return await EVENT_REPO.findById();
  }
}
