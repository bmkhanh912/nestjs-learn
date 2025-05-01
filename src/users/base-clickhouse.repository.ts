// base-clickhouse.repository.ts

import { ClickHouseClient } from '@clickhouse/client';

/**
 * Lớp cơ sở dành cho các repository sử dụng ClickHouse.
 * Chứa logic dùng chung để thực thi câu truy vấn.
 */
export class BaseClickhouseRepository {
  /**
   * Inject một instance của ClickHouseClient qua constructor.
   * Được khai báo là `protected` để lớp con có thể truy cập.
   */
  constructor(protected readonly clickhouseClient: ClickHouseClient) {}

  /**
   * Phương thức thực thi truy vấn ClickHouse với định dạng trả về là JSON.
   *
   * @param query - Câu truy vấn SQL dạng chuỗi.
   * @returns Kết quả dữ liệu đã parse từ JSON (thường nằm trong `data`).
   */
  protected async query(query: string): Promise<any> {
    const resultSet = await this.clickhouseClient.query({
      query,
      format: 'JSON',
    });

    const data = await resultSet.json(); // Parse kết quả thành JSON object
    return data.data; // Trả về phần dữ liệu chính
  }
}
