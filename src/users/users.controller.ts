import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Phương thức GET để lấy người dùng từ postgress
  @Get('pg')
  create() {
    // Gọi phương thức createUser từ UsersService, truyền vào dữ liệu DTO
    // createUserDto chứa thông tin người dùng mà client gửi lên
    return this.usersService.findUserLog();
  }

  // Phương thức GET để lấy log hành động gần đây của người dùng
  @Get('ch')
  getUserRecentLogs() {
    // Gọi phương thức getUserRecentLogs từ UsersService để lấy logs
    return this.usersService.getUserRecentLogs();
  }
}
