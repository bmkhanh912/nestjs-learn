import { ILogger } from './interfaces/logger.interface';

// console-logger.ts
export class ConsoleLogger implements ILogger {
  log(msg: string, data?: any) {
    console.log(`[LOG] ${msg}`, data);
  }

  error(msg: string, err: any) {
    console.error(`[ERROR] ${msg}`, err);
  }
}
