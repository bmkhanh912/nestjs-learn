import { MessageTargetService } from '../service/message.target.service';
import { TelegramService } from './telegram.service';

/**
 * Adapter để tích hợp dịch vụ gửi OTP qua Telegram (hoặc dịch vụ SMS giả lập).
 *
 * Kế thừa từ MessageTargetService để ghi log chung và thêm logic cụ thể dùng TelegramService.
 */
export class TelegramAdapter extends MessageTargetService {
  private provider: TelegramService;

  /**
   * Khởi tạo adapter với API key cho nhà cung cấp TelegramService.
   *
   * @param apiKey - Khóa API dùng để xác thực với TelegramService
   */
  constructor(apiKey: string) {
    super();
    this.provider = new TelegramService(apiKey);
  }

  /**
   * Gửi mã OTP đến số điện thoại qua TelegramService.
   *
   * @param phone - Số điện thoại người nhận OTP
   */
  send(phone: string): void {
    const otp = '123456'; // Giả lập OTP (có thể dùng random hoặc dịch vụ thật)
    this.provider.sendSMS(phone, `Mã OTP của bạn là: ${otp}`);
    super.send(phone); // Ghi log từ lớp cha (nếu có)
  }

  /**
   * Xác minh mã OTP với dịch vụ Telegram.
   *
   * @param phone - Số điện thoại người dùng
   * @param code - Mã OTP nhập vào
   */
  verify(phone: string, code: string) {
    super.verify(phone, code); // Ghi log
    return this.provider.checkSMS(phone, code);
  }
}
