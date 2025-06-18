import { Injectable } from '@nestjs/common';
import { OrderBuilder } from './order-builder.interface';
import { Order } from '../entity/order.entity';

@Injectable()
export class OrderBuilderService implements OrderBuilder {
  /**
   * Biến private lưu trữ đơn hàng đang được xây dựng.
   */
  private order: Order;

  /**
   * Khởi tạo lại một đối tượng Order mới.
   * Phải được gọi trước khi bắt đầu build.
   */
  reset(): void {
    this.order = new Order();
  }

  /**
   * Thiết lập ID của người dùng cho đơn hàng.
   * @param userId - ID của người dùng đặt hàng.
   */
  setUser(userId: number): void {
    this.order.userId = userId;
  }

  /**
   * Thêm một sản phẩm vào đơn hàng với số lượng chỉ định.
   * @param productId - ID sản phẩm cần thêm.
   * @param quantity - Số lượng sản phẩm.
   */
  addProduct(productId: number, quantity: number): void {
    this.order.products.push({ productId, quantity });
  }

  /**
   * Thiết lập phương thức vận chuyển cho đơn hàng.
   * @param method - Tên phương thức vận chuyển (vd: "standard", "express").
   */
  setShippingMethod(method: string): void {
    this.order.shippingMethod = method;
  }

  /**
   * Thiết lập phương thức thanh toán cho đơn hàng.
   * @param method - Tên phương thức thanh toán (vd: "paypal", "cod").
   */
  setPaymentMethod(method: string): void {
    this.order.paymentMethod = method;
  }

  /**
   * Trả về kết quả cuối cùng là đối tượng Order đã được xây dựng.
   * @returns Đối tượng Order hoàn chỉnh.
   */
  getResult(): Order {
    return this.order;
  }
}
