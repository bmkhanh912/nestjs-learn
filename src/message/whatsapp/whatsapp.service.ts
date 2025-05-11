/**
 * Dịch vụ giả lập giao tiếp với hệ thống WhatsApp qua API key.
 *
 * Cung cấp các phương thức để gửi và xác minh mã OTP qua WhatsApp.
 */
export class WhatsappService {
  private apiKey: string;

  /**
   * Khởi tạo dịch vụ WhatsApp với khóa API.
   *
   * @param apiKey - Khóa API dùng để xác thực và kết nối với WhatsApp Service
   */
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Gửi tin nhắn SMS qua WhatsApp đến số điện thoại chỉ định.
   *
   * @param phone - Số điện thoại người nhận
   * @param content - Nội dung tin nhắn (ví dụ: mã OTP)
   */
  sendSMS(phone: string, content: string): void {
    console.log(`[whatsapp] Gửi "${content}" đến ${phone}`);
    // Thực tế, đây có thể là nơi gọi API WhatsApp thật để gửi tin nhắn
  }

  /**
   * Kiểm tra mã OTP qua WhatsApp.
   *
   * @param email - Địa chỉ email của người nhận (sử dụng thay vì số điện thoại trong ví dụ này)
   * @param otp - Mã OTP cần xác minh
   */
  checkSMS(email: string, otp: string): void {
    console.log(`[whatsapp] Kiểm tra mã "${otp}" cho ${email}`);
    // Trong thực tế, phương thức này sẽ gọi API để xác minh mã OTP.
  }
}
