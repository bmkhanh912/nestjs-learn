import { IUserLogClickhouseRepository } from './interfaces/user-log.repository.interface';
import { Inject, Injectable } from '@nestjs/common';
import { ClickHouseClient } from '@clickhouse/client';
import { BaseClickhouseRepository } from './base-clickhouse.repository';

/**
 * Repository cụ thể cho ClickHouse để xử lý các truy vấn liên quan đến user log.
 * Lớp này triển khai interface `IUserLogClickhouseRepository` và kế thừa lớp cơ sở `BaseClickhouseRepository`.
 */
@Injectable()
export class UserClickhouseRepository
  extends BaseClickhouseRepository
  implements IUserLogClickhouseRepository
{
  /**
   * Inject client của ClickHouse thông qua constructor.
   * Gọi lại constructor của lớp cha (`BaseClickhouseRepository`) để khởi tạo.
   */
  constructor(
    @Inject('CLICKHOUSE_CLIENT')
    clickhouseClient: ClickHouseClient,
  ) {
    super(clickhouseClient);
  }

  /**
   * Triển khai method từ interface gốc `IUserLogRepository`.
   * Truy vấn số lượt xem trang 'home' theo ngày.
   */
  async findUserLog(): Promise<any> {
    const homepageQuery = `
      SELECT event_date, count(*) AS view_count
      FROM event__22_03_25
      WHERE page_id = 'home'
      GROUP BY event_date
      ORDER BY event_date
    `;

    // Dùng method query từ lớp cơ sở
    return this.query(homepageQuery);
  }

  /**
   * Triển khai method riêng từ interface mở rộng `IUserLogClickhouseRepository`.
   * Thực hiện truy vấn thống kê tổng hợp — ví dụ lượt truy cập theo ngày.
   */
  async getAggregatedStats(): Promise<any> {
    const homepageQuery = `
      SELECT event_date, count(*) AS view_count
      FROM event__22_03_25
      WHERE page_id = 'home'
      GROUP BY event_date
      ORDER BY event_date
    `;

    return this.query(homepageQuery);
  }
}
