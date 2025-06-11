import { SmsFactory } from '../interfaces/sms-factory.interface';
import { SmsProcessor } from '../interfaces/sms-processor.interface';
import { TwilioProcessor } from '../processors/twilio-provider';

/**
 * TwilioFactory là một lớp triển khai của SmsFactory
 * Mục đích là tạo ra thể hiện của NexmoProcessor (nhà cung cấp cụ thể)
 */
export class TwilioFactory implements SmsFactory {
  /**
   * Tạo và trả về một thể hiện của NexmoProcessor
   * Đây là nơi "Abstract Factory" được triển khai để tách rời logic khởi tạo nhà cung cấp cụ thể
   */
  createProcessor(): SmsProcessor {
    return new TwilioProcessor();
  }
}
