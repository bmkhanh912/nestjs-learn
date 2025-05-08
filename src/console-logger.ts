import { ILogger } from './interfaces/logger.interface';

/**
 * ConsoleLogger là một lớp triển khai ILogger,
 * dùng để ghi log ra console. Phù hợp sử dụng trong
 * môi trường phát triển (development, staging).
 */
export class ConsoleLogger implements ILogger {
  /**
   * Ghi log thông thường (không phải lỗi) ra console.
   *
   * @param msg - Thông điệp chính cần log, hiển thị cùng prefix [LOG]
   * @param data - (Tùy chọn) Dữ liệu kèm theo, có thể là object, string, v.v.
   *
   * @example
   * logger.log('API called', { endpoint: '/users' });
   */
  log(msg: string, data?: any): void {
    console.log(`[LOG] ${msg}`, data);
  }

  /**
   * Ghi log lỗi ra console, dùng khi có exception hoặc lỗi nghiệp vụ.
   *
   * @param msg - Thông điệp mô tả lỗi, hiển thị cùng prefix [ERROR]
   * @param err - (Tùy chọn) Dữ liệu chi tiết lỗi (stack trace, object, ...)
   *
   * @example
   * logger.error('API failed', new Error('Timeout'));
   */
  error(msg: string, err?: any): void {
    console.error(`[ERROR] ${msg}`, err);
  }
}
