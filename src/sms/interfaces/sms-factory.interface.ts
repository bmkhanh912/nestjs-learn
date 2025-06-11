import { SmsProcessor } from './sms-processor.interface';

/**
 * SmsFactory là một interface cho các Factory cụ thể (như TwilioFactory, NexmoFactory, v.v.)
 * Mục tiêu là tách biệt logic khởi tạo đối tượng SmsProcessor, giúp dễ dàng thay đổi/hoán đổi nhà cung cấp
 */
export interface SmsFactory {
  /**
   * Phương thức dùng để tạo ra một thể hiện cụ thể của SmsProcessor
   */
  createProcessor(): SmsProcessor;
}
