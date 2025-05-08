// Import các logger cụ thể theo môi trường
import { ConsoleLogger } from './console-logger';
import { GrafanaLogger } from './grafana-logger';

/**
 * Lấy logger phù hợp với môi trường hiện tại.
 * - Trong môi trường 'production', dùng GrafanaLogger để gửi log đến hệ thống như Loki/ELK.
 * - Ngược lại (development/staging), dùng ConsoleLogger để log ra console.
 */
function getLoggerByEnv() {
  const ENV = process.env.NODE_ENV;

  /** Tạo instance logger cho production  */
  if (ENV === 'production') {
    return new GrafanaLogger();
  }
  /** Tạo instance logger cho môi trường khác */
  return new ConsoleLogger();
}

/**
 * Decorator dùng để log thông tin mỗi lần gọi API (method).
 * Ghi lại:
 * - Trạng thái thành công hoặc lỗi
 * - Thời gian thực thi
 * - Tham số truyền vào và kết quả trả về
 *
 * @returns MethodDecorator
 */
export function LogApi(): MethodDecorator {
  /**  Lấy logger tương ứng theo môi trường */
  const LOGGER = getLoggerByEnv();

  /**  Trả về function decorator cho method */
  return (target, propertyKey, descriptor: PropertyDescriptor) => {
    const ORIGINAL_METHOD = descriptor.value;

    /**  Ghi đè lại logic thực thi method gốc */
    descriptor.value = async function (...args: any[]) {
      const START = Date.now(); // Lưu thời gian bắt đầu

      try {
        /**  Gọi thực thi method gốc */
        const RESULT = await ORIGINAL_METHOD.apply(this, args);
        const DURATION = Date.now() - START; // Tính thời gian phản hồi

        /**  Ghi log thành công */
        LOGGER.log(
          `✅ [${String(
            propertyKey,
          )}] Success | Time: ${DURATION}ms | Args: ${JSON.stringify(
            args,
          )} | Result: ${JSON.stringify(RESULT)}`,
        );

        return RESULT;
      } catch (error) {
        /**  Nếu có lỗi xảy ra, tính thời gian phản hồi */
        const DURATION = Date.now() - START;

        /**  Ghi log lỗi */
        LOGGER.error(
          `❌ [${String(
            propertyKey,
          )}] Error | Time: ${DURATION}ms | Args: ${JSON.stringify(
            args,
          )} | Error: ${error.message}`,
        );

        /**  Ném lại lỗi để các middleware khác xử lý */
        throw error;
      }
    };

    return descriptor;
  };
}
