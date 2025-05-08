import { ILogger } from './interfaces/logger.interface';

/**
 * GrafanaLogger là lớp triển khai ILogger,
 * dùng để gửi log đến hệ thống giám sát như Grafana, Loki, hoặc ELK.
 *
 * Thường dùng trong môi trường production để theo dõi hoạt động hệ thống.
 */
export class GrafanaLogger implements ILogger {
  /**
   * Gửi log thông thường (không phải lỗi) đến hệ thống giám sát.
   *
   * @param msg - Thông điệp chính cần log
   * @param data - (Tùy chọn) Dữ liệu chi tiết đi kèm log
   *
   * @example
   * logger.log('User created successfully', { userId: 123 });
   */
  log(msg: string, data?: any): void {
    // TODO: Gửi log đến hệ thống như Grafana/Loki thông qua HTTP hoặc transport khác
    // Ví dụ: gọi API hoặc ghi vào queue trung gian
    // console.log(`[GRAFANA LOG] ${msg}`, data); // Có thể giữ lại cho debug nếu cần
  }

  /**
   * Gửi log lỗi đến hệ thống giám sát.
   *
   * @param msg - Thông điệp mô tả lỗi
   * @param err - (Tùy chọn) Thông tin chi tiết về lỗi (object, stack trace, v.v.)
   *
   * @example
   * logger.error('Order processing failed', { error: 'OutOfStock' });
   */
  error(msg: string, err?: any): void {
    // TODO: Gửi lỗi đến hệ thống như Grafana/Loki thông qua HTTP hoặc transport khác
    // Ví dụ: gọi API hoặc ghi vào queue trung gian
    // console.error(`[GRAFANA ERROR] ${msg}`, err); // Có thể giữ lại cho debug nếu cần
  }
}
