import { Body, Controller, Post } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('telegram/verify/send')
  async sendVerificationCode(
    @Body() body: { phone_number: string },
  ): Promise<any> {
    /** Gọi service để gửi mã xác minh qua Telegram. */
    const RESULT = await this.messageService.sendVerificationCodeTelegram(
      body.phone_number,
    );

    /** Trả về kết quả từ service.
     * Kết quả này bao gồm mã hash của OTP và số điện thoại.
     * Mã hash này sẽ được sử dụng để xác minh mã OTP sau này. */
    return RESULT;
  }

  /**
   * Xác minh mã OTP mà người dùng nhập vào.
   * Phương thức này nhận thông tin mã OTP và số điện thoại, sau đó gọi service để xác minh.
   *
   * @param body Thông tin yêu cầu bao gồm số điện thoại, mã OTP và hash của mã OTP.
   * @returns Trả về session đã lưu nếu xác minh thành công.
   */
  @Post('telegram/verify')
  async verifyCode(
    @Body()
    body: {
      phone_number: string;
      phone_code: string;
    },
  ): Promise<any> {
    /** Gọi service để xác minh mã OTP và lấy session. */
    const RESULT = await this.messageService.verifyCodeTelegram(
      body.phone_number,
      body.phone_code,
    );

    /** Trả về session đã lưu. */
    /** Session này sẽ được sử dụng để duy trì trạng thái đăng nhập của người dùng. */
    return RESULT;
  }
}
