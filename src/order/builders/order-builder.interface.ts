import { Order } from '../entity/order.entity';

/**
 * OrderBuilder định nghĩa các bước cần thiết để xây dựng một đối tượng Order.
 * Mỗi bước tương ứng với việc cấu hình một phần cụ thể của đơn hàng.
 */
export interface OrderBuilder {
  /**
   * Đặt lại trạng thái của builder để bắt đầu tạo đơn hàng mới.
   */
  reset(): void;

  /**
   * Thiết lập người dùng cho đơn hàng.
   * @param userId - ID của người dùng đặt hàng.
   */
  setUser(userId: number): void;

  /**
   * Thêm một sản phẩm vào đơn hàng.
   * @param productId - ID của sản phẩm cần thêm.
   * @param quantity - Số lượng sản phẩm.
   */
  addProduct(productId: number, quantity: number): void;

  /**
   * Thiết lập phương thức vận chuyển cho đơn hàng.
   * @param method - Tên phương thức vận chuyển (ví dụ: "standard", "express").
   */
  setShippingMethod(method: string): void;

  /**
   * Thiết lập phương thức thanh toán cho đơn hàng.
   * @param method - Tên phương thức thanh toán (ví dụ: "paypal", "cod").
   */
  setPaymentMethod(method: string): void;

  /**
   * Trả về kết quả cuối cùng của quá trình xây dựng đơn hàng.
   * @returns Đối tượng Order đã được cấu hình.
   */
  getResult(): Order;
}
