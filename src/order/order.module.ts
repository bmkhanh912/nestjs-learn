import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderBuilderService } from './builders/order-builder.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderBuilderService],
})
export class OrderModule {}
