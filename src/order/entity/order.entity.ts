/**
 * Lớp Order đại diện cho một đơn hàng.
 * Bao gồm thông tin người dùng, danh sách sản phẩm,
 * phương thức vận chuyển và phương thức thanh toán.
 */
export class Order {
  /**
   * ID của người dùng đã tạo đơn hàng.
   */
  userId: number;

  /**
   * Danh sách sản phẩm trong đơn hàng.
   * Mỗi sản phẩm gồm productId và quantity (số lượng).
   */
  products: { productId: number; quantity: number }[] = [];

  /**
   * (Tuỳ chọn) Phương thức vận chuyển được chọn cho đơn hàng.
   */
  shippingMethod?: string;

  /**
   * (Tuỳ chọn) Phương thức thanh toán được chọn cho đơn hàng.
   */
  paymentMethod?: string;
}
