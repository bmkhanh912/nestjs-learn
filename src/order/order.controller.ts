import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { GrpcMethod } from '@nestjs/microservices';

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
}
