// base.interface.ts

/**
 * Interface gốc dùng chung cho tất cả các repository truy vấn user log.
 * Dù sử dụng DB nào (MySQL, Postgres, ClickHouse), các repository đều cần implement hàm này.
 */
export interface IUserLogRepository {
  /**
   * Truy vấn các log người dùng theo dạng chung (phổ biến).
   */
  findUserLog(): Promise<any>;
}
