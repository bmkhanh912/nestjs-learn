import { Injectable } from '@nestjs/common';
import { OrderBuilderService } from './builders/order-builder.service';
import { Order } from './entity/order.entity';

@Injectable()
export class OrderService {
  /**
   * OrderService chịu trách nhiệm chỉ đạo quá trình xây dựng đơn hàng
   * bằng cách sử dụng OrderBuilderService.
   *
   * @param builder - Builder cụ thể để tạo đối tượng Order.
   */
  constructor(private readonly builder: OrderBuilderService) {}

  /**
   * Tạo đơn hàng cơ bản với 1 sản phẩm duy nhất.
   *
   * @param userId - ID của người dùng.
   * @param productId - ID của sản phẩm cần thêm vào đơn hàng.
   * @returns Đơn hàng đã được xây dựng.
   */
  createBasicOrder(userId: number, productId: number): Order {
    /** thực hiện reset đơn hàng */
    this.builder.reset();
    /** thêm user */
    this.builder.setUser(userId);
    /** thêm sản phẩm */
    this.builder.addProduct(productId, 1);
    /** trả về kết quả */
    return this.builder.getResult();
  }

  /**
   * Tạo đơn hàng đầy đủ bao gồm nhiều sản phẩm, phương thức vận chuyển và thanh toán.
   *
   * @param userId - ID của người dùng.
   * @param items - Mảng các sản phẩm, mỗi sản phẩm gồm productId và quantity.
   * @param shipping - Phương thức vận chuyển (vd: "standard", "express").
   * @param payment - Phương thức thanh toán (vd: "paypal", "cod").
   * @returns Đơn hàng đã được xây dựng.
   */
  createFullOrder(
    userId: number,
    items: any[],
    shipping: string,
    payment: string,
  ): Order {
    /** thực hiện reset đơn hàng */
    this.builder.reset();
    /** thêm user */
    this.builder.setUser(userId);
    for (const item of items) {
      /** thêm sản phẩm */
      this.builder.addProduct(item.productId, item.quantity);
    }
    /** thêm phương thức vận chuyển*/
    this.builder.setShippingMethod(shipping);
    /** thêm phương thức thanh toán */
    this.builder.setPaymentMethod(payment);
    /** trả về kết quả */
    return this.builder.getResult();
  }
}
