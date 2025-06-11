import { Injectable } from '@nestjs/common';
import { TwilioFactory } from './factories/twilio-factory';
import { SmsProcessor } from './interfaces/sms-processor.interface';
import { SmsFactory } from './interfaces/sms-factory.interface';
import { NexmoFactory } from './factories/nexmo-factory';

@Injectable()
export class SmsService {
  /**
   * Trả về một factory tương ứng với nhà cung cấp được chỉ định
   *
   * @param provider - Tên nhà cung cấp SMS ('twilio', 'nexmo', ...)
   * @returns SmsFactory - Factory cụ thể dùng để tạo SmsProcessor tương ứng
   */
  private getFactory(provider: string): SmsFactory {
    switch (provider) {
      case 'twilio':
        return new TwilioFactory();
      case 'nexmo':
        return new NexmoFactory();
      default:
        console.log(`Unknown provider: ${provider}. Falling back to Stripe.`);
        return new NexmoFactory();
    }
  }

  /**
   * Gửi tin nhắn SMS đến số điện thoại chỉ định
   *
   * @param mobile - Số điện thoại người nhận
   * @param message - Nội dung tin nhắn cần gửi
   */
  async send(mobile: string, message: string) {
    /**  Lựa chọn provider SMS (có thể truyền động từ config/env thay vì hardcode) */
    const provider = this.getFactory('twilio').createProcessor();

    /**  Gửi SMS thông qua processor cụ thể */
    await provider.sendSms(mobile, message);
  }
}
