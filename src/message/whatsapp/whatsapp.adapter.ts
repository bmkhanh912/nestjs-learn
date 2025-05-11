import { MessageTargetService } from '../service/message.target.service';
import { WhatsappService } from './whatsapp.service';

/**
 * Adapter để tích hợp dịch vụ gửi OTP qua WhatsApp.
 *
 * Kế thừa từ MessageTargetService để ghi log chung và thêm logic cụ thể dùng WhatsappService.
 */
export class WhatsappAdapter extends MessageTargetService {
  private provider: WhatsappService;

  /**
   * Khởi tạo adapter với API key cho nhà cung cấp WhatsAppService.
   *
   * @param apiKey - Khóa API dùng để xác thực với WhatsAppService
   */
  constructor(apiKey: string) {
    super();
    this.provider = new WhatsappService(apiKey);
  }

  /**
   * Gửi mã OTP đến số điện thoại qua WhatsAppService.
   *
   * @param phone - Số điện thoại người nhận OTP
   */
  send(phone: string): void {
    super.send(phone); // Ghi log từ lớp cha (nếu có)

    const otp = '123456'; // Giả lập OTP (có thể dùng random hoặc dịch vụ thật)
    this.provider.sendSMS(phone, `Mã OTP của bạn là: ${otp}`);
  }

  /**
   * Xác minh mã OTP với dịch vụ WhatsApp.
   *
   * @param phone - Số điện thoại người dùng
   * @param code - Mã OTP nhập vào
   */
  verify(phone: string, code: string): void {
    super.verify(phone, code); // Ghi log
    this.provider.checkSMS(phone, code);
  }
}
