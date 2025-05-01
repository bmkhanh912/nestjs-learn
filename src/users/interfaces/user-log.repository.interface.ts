// postgres.interface.ts

import { IUserLogRepository } from './base.interface';

/**
 * Interface dành riêng cho repository sử dụng PostgreSQL.
 * Mở rộng từ interface gốc và định nghĩa thêm các hàm đặc thù của Postgres.
 */
export interface IUserLogPostGresRepository extends IUserLogRepository {
  /**
   * Tìm log người dùng theo userId - đặc thù cho PostgreSQL.
   * @param userId ID của người dùng cần truy vấn.
   */
  findByUserId(userId: number): Promise<any>;
}
/**
 * Interface dành riêng cho repository sử dụng ClickHouse.
 * Mở rộng từ interface gốc và định nghĩa thêm các hàm truy vấn dạng thống kê tổng hợp.
 */
export interface IUserLogClickhouseRepository extends IUserLogRepository {
  /**
   * Lấy thống kê tổng hợp (aggregate) các sự kiện theo thời gian, page, v.v.
   */
  getAggregatedStats(): Promise<any>;
}
