import { Injectable } from '@nestjs/common';
import { TelegramAdapter } from './telegram/telegram.adapter';
import { WhatsappAdapter } from './whatsapp/whatsapp.adapter';

@Injectable()
export class MessageService {
  /**
   * Adapter để kết nối với Telegram.
   * Sử dụng TelegramAdapter để gọi các phương thức gửi mã xác minh, xác minh mã, và tạo mã QR.
   */
  private readonly TELEGRAM_ADAPTER: TelegramAdapter;

  private readonly WHATSAPP_ADAPTER: WhatsappAdapter;
  /**
   * Khởi tạo dịch vụ chatbot với adapter Telegram.
   * Tạo một instance của TelegramAdapter để sử dụng trong các phương thức của dịch vụ.
   */
  constructor() {
    this.TELEGRAM_ADAPTER = new TelegramAdapter('123');
    this.WHATSAPP_ADAPTER = new WhatsappAdapter('123');
  }

  async sendVerificationCodeTelegram(phone_number: string): Promise<any> {
    // Logic gửi mã xác minh qua Telegram
    return this.TELEGRAM_ADAPTER.send('0987654321');
  }

  async verifyCodeTelegram(
    phone_number: string,
    phone_code: string,
  ): Promise<any> {
    // Logic xác minh mã OTP qua Telegram
    return this.TELEGRAM_ADAPTER.verify('+84987654321', '654321');
  }

  async sendVerificationCodeWhatsapp(phone_number: string): Promise<any> {
    // Logic gửi mã xác minh qua whatsapp
    return this.WHATSAPP_ADAPTER.send('bmkhanh912@gmail.com');
  }

  async verifyCodeWhatsapp(
    phone_number: string,
    phone_code: string,
  ): Promise<any> {
    // Logic xác minh mã OTP qua whatsapp
    return this.WHATSAPP_ADAPTER.verify('bmkhanh912@gmail.com', '654321');
  }
}
