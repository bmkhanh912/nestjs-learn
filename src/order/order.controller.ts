import { Controller, Get, Res, Sse } from '@nestjs/common';
import { OrderService } from './order.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Response } from 'express';
import { Observable } from 'rxjs';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('basic')
  getBasicOrder() {
    return this.orderService.createBasicOrder(1, 101);
  }

  @Get('full')
  getFullOrder() {
    return this.orderService.createFullOrder(
      2,
      [
        { productId: 201, quantity: 2 },
        { productId: 202, quantity: 1 },
      ],
      'express',
      'paypal',
    );
  }

  /**
   * API endpoint: /example/stream
   * Trả về luồng dữ liệu theo chuẩn Server-Sent Events (SSE) sử dụng thuần Express
   */
  @Get('stream')
  stream(@Res() res: Response) {
    // Đặt header để client hiểu đây là stream SSE
    res.setHeader('Content-Type', 'text/event-stream'); // Kiểu dữ liệu SSE
    res.setHeader('Cache-Control', 'no-cache'); // Không cache kết quả
    res.setHeader('Connection', 'keep-alive'); // Giữ kết nối mở liên tục

    // Gửi header ngay lập tức để client bắt đầu nhận dữ liệu
    res.flushHeaders();

    let i = 0;

    // Gửi dữ liệu mỗi 1000ms (1 giây)
    const interval = setInterval(() => {
      // Gửi dữ liệu dưới dạng: data: {...}\n\n
      res.write(`data: ${JSON.stringify({ count: i++ })}\n\n`);

      // Khi gửi đủ 10 lần thì dừng lại
      if (i >= 10) {
        clearInterval(interval); // Dừng interval
        res.end(); // Kết thúc stream, đóng kết nối
      }
    }, 1000);
  }

  /**
   * API endpoint: /example/stream1
   * Trả về luồng dữ liệu SSE sử dụng @Sse và Observable
   */
  @Sse('stream1')
  stream1(): Observable<any> {
    console.log('SSE stream started'); // Log khi stream bắt đầu

    return new Observable<any>((observer) => {
      let count = 0;

      // Gửi dữ liệu mỗi 1000ms (1 giây)
      const interval = setInterval(() => {
        // Gửi dữ liệu tới client
        observer.next({ data: { count } });
        count++;

        // Khi gửi đủ 10 lần thì dừng lại
        if (count >= 10) {
          clearInterval(interval); // Dừng interval
          observer.complete(); // Đóng stream
        }
      }, 1000);
    });
  }
}
