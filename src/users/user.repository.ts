import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { IUserLogPostGresRepository } from './interfaces/user-log.repository.interface';

/**
 * Repository dành cho cơ sở dữ liệu PostgreSQL.
 * Thực thi interface mở rộng `IUserLogPostGresRepository` bao gồm các hàm đặc thù.
 */
@Injectable()
export class UserRepository implements IUserLogPostGresRepository {
  /**
   * Inject repository của TypeORM để thao tác với bảng `User`.
   */
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  /**
   * Triển khai method chung từ interface gốc `IUserLogRepository`.
   * (Tạm thời trả về chuỗi mô tả - cần sửa lại để thực thi query thực tế).
   */
  async findUserLog(): Promise<any> {
    return 'This action get a new user from Postgress';
  }

  /**
   * Triển khai method đặc thù từ interface mở rộng `IUserLogPostGresRepository`.
   * (Tạm thời trả về chuỗi mô tả - cần sửa lại để thực thi query thực tế).
   *
   * @param id ID của người dùng cần truy vấn.
   */
  async findByUserId(id: number): Promise<any> {
    return 'This action get a new user from Postgress';
  }
}
