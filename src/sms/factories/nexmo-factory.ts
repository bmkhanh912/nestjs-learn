import { SmsFactory } from '../interfaces/sms-factory.interface';
import { SmsProcessor } from '../interfaces/sms-processor.interface';
import { NexmoProcessor } from '../processors/nexmo-provider';

/**
 * NexmoFactory là một lớp triển khai của SmsFactory
 * Mục đích là tạo ra thể hiện của NexmoProcessor (nhà cung cấp cụ thể)
 */
export class NexmoFactory implements SmsFactory {
  /**
   * Tạo và trả về một thể hiện của NexmoProcessor
   * Đây là nơi "Abstract Factory" được triển khai để tách rời logic khởi tạo nhà cung cấp cụ thể
   */
  createProcessor(): SmsProcessor {
    return new NexmoProcessor();
  }
}
