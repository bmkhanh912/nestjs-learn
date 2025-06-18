import { Injectable } from '@nestjs/common';
import { TelegramAdapter } from './telegram/telegram.adapter';
import { TelegramService } from './telegram/telegram.service';
import { ClientInterface } from './service/client.interface';

@Injectable()
export class MessageService {
  /**
   * Adapter để kết nối với Telegram.
   * Sử dụng TelegramAdapter để gọi các phương thức gửi mã xác minh, xác minh mã, và tạo mã QR.
   */

  private CLIENT: ClientInterface;
  /**
   * Khởi tạo dịch vụ chatbot với adapter Telegram.
   * Tạo một instance của TelegramAdapter để sử dụng trong các phương thức của dịch vụ.
   */
  constructor() {
    /** Tạo instance của TelegramService với API key (giả lập) */
    const TELEGRAM_SERVICE = new TelegramService('123');
    /** Tạo instance của TelegramAdapter với dịch vụ TelegramService */
    const TELEGRAM_ADAPTER = new TelegramAdapter(TELEGRAM_SERVICE);
    this.CLIENT = TELEGRAM_ADAPTER;
  }

  async sendVerificationCodeTelegram(phone_number: string): Promise<any> {
    // Logic gửi mã xác minh qua Telegram
    return this.CLIENT.send('0987654321');
  }

  async verifyCodeTelegram(
    phone_number: string,
    phone_code: string,
  ): Promise<any> {
    // Logic xác minh mã OTP qua Telegram
    return this.CLIENT.verify('+84987654321', '654321');
  }
}
