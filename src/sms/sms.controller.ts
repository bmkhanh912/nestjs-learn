import { Controller, Post } from '@nestjs/common';
import { SmsService } from './sms.service';

@Controller('sms')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @Post('send')
  async sendVerificationCode() {
    return await this.smsService.send('+84123456789', 'Xin chào từ hệ thống!');
  }
}
