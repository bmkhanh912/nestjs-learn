import { SmsProcessor } from '../interfaces/sms-processor.interface';

/**
 * TwilioProcessor là một class triển khai SmsProcessor,
 * dùng để xử lý việc gửi SMS thông qua nhà cung cấp Nexmo
 */
export class TwilioProcessor implements SmsProcessor {
  /**
   * Gửi tin nhắn SMS đến một số điện thoại thông qua dịch vụ
   * */
  async sendSms(mobile: string, message: string) {
    console.log(`Twilio gửi đến ${mobile}: ${message}`);
    // gọi Twilio API ở đây
  }
}
