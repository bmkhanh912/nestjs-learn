import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PostgresEventRepository } from './repositories/postgre-event.repository';
import { ClickhouseEventRepository } from './repositories/clickhouse-event.repository';
import { IEventRepository } from './interfaces/IEventRepository';

@Injectable()
export class UsersService {
  async findUserLog() {
    const EVENT_REPO: IEventRepository = new PostgresEventRepository();

    // Gọi phương thức `findAll` từ `userClickhouseRepository` để lấy tất cả các logs.
    return await EVENT_REPO.findAll();
  }

  async getUserRecentLogs() {
    // Gọi phương thức `findUserLog` từ `userClickhouseRepository` để lấy các logs gần đây của người dùng.
    const EVENT_REPO: IEventRepository = new ClickhouseEventRepository();
    return await EVENT_REPO.findById();
  }
}
