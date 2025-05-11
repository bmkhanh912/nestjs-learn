export class MessageClient {
  private adapter: any;

  constructor(adapter: any) {
    this.adapter = adapter;
  }

  // Gửi mã OTP
  sendOtp(code) {
    this.adapter.sendMessage(code);
  }

  // Kiểm tra mã OTP
  verifyOtp(code) {
    return this.adapter.verifyCode(code);
  }
}
