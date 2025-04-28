import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { UserClickhouseRepository } from './use-clickhouse.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userClickhouseRepository: UserClickhouseRepository,
  ) {}

  async findUserLog() {
    // Gọi phương thức `createUser` từ `userRepository` để tạo một người dùng mới.
    // Phương thức này sẽ tương tác với cơ sở dữ liệu PostgreSQL thông qua repository,
    // giúp tạo mới người dùng với các thông tin (như username, password).
    return this.userRepository.findUserLog();
  }

  async getUserRecentLogs() {
    // Gọi phương thức `findUserLog` từ `userClickhouseRepository` để lấy các logs gần đây của người dùng.
    // Phương thức này sẽ thực hiện một truy vấn đến ClickHouse để lấy log hành động của người dùng,
    // giúp chúng ta có thể theo dõi các hành động của người dùng từ log (chẳng hạn như đăng nhập, đăng xuất, v.v.).
    // Dữ liệu này thường dùng để phân tích hành vi của người dùng hoặc phục vụ mục đích thống kê.
    return this.userClickhouseRepository.findUserLog();
  }
}
