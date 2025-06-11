/**
 * SmsProcessor định nghĩa hợp đồng cho các lớp xử lý gửi SMS cụ thể
 */
export interface SmsProcessor {
  /**
   * Gửi tin nhắn SMS đến số điện thoại chỉ định
   */
  sendSms(mobile: string, message: string): Promise<void>;
}
