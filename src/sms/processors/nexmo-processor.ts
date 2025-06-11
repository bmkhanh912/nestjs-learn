import { SmsProcessor } from '../interfaces/sms-processor.interface';

/**
 * NexmoProcessor là một class triển khai SmsProcessor,
 * dùng để xử lý việc gửi SMS thông qua nhà cung cấp Nexmo
 */
export class NexmoProcessor implements SmsProcessor {
  /**
   * Gửi tin nhắn SMS đến một số điện thoại thông qua dịch vụ
   * */
  async sendSms(mobile: string, message: string) {
    console.log(`Nexmo gửi đến ${mobile}: ${message}`);
    // gọi Nexmo API
  }
}
