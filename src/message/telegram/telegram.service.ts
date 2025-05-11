/**
 * Dịch vụ giả lập giao tiếp với hệ thống Telegram hoặc SMS qua API key.
 *
 * Cung cấp các phương thức để gửi và xác minh mã OTP qua số điện thoại.
 */
export class TelegramService {
  private apiKey: string;

  /**
   * Khởi tạo dịch vụ với khóa API để xác thực (nếu cần dùng real service).
   *
   * @param apiKey - Khóa API của hệ thống Telegram hoặc SMS
   */
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Gửi tin nhắn SMS chứa nội dung đến số điện thoại chỉ định.
   *
   * @param phone - Số điện thoại người nhận
   * @param content - Nội dung tin nhắn (ví dụ: mã OTP)
   */
  sendSMS(phone: string, content: string): void {
    console.log(`[telegram] Gửi "${content}" đến ${phone}`);
  }

  /**
   * Xác minh mã OTP đã gửi đến số điện thoại.
   *
   * @param phone - Số điện thoại cần xác minh
   * @param otp - Mã OTP người dùng nhập vào
   */
  checkSMS(phone: string, otp: string): void {
    console.log(`[telegram] Kiểm tra mã "${otp}" cho ${phone}`);
  }
}
