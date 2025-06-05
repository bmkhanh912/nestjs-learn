import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  findOne(id: number) {
    return {
      message: 'this is from client',
    };
  }
}
