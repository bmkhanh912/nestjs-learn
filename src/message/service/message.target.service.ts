/**
 * Service giả lập gửi và xác minh mã OTP đến một liên hệ.
 *
 * Đây là một lớp ví dụ dùng trong context adapter pattern.
 * Bạn có thể tích hợp dịch vụ thực tế (tele, whatsapp, v.v.) bằng cách thay thế class này bằng adapter thật.
 */
export class MessageTargetService {
  /**
   * Gửi tin nhắn (OTP) đến liên hệ đã chỉ định.
   *
   * @param contact - Số điện thoại hoặc địa chỉ liên hệ (email, v.v.)
   *
   * @example
   * send('+84987654321');
   */
  send(contact: string) {
    console.log(`connect db postgresql`);
  }

  /**
   * Xác minh mã OTP cho một liên hệ.
   *
   * @param contact - Số điện thoại hoặc địa chỉ liên hệ đã nhận OTP
   * @param code - Mã OTP người dùng nhập để xác minh
   *
   * @example
   * verify('+84987654321', '123456');
   */
  verify(contact: string, code: string) {
    console.log(`Verifying code ${code} for ${contact}`);
  }
}
