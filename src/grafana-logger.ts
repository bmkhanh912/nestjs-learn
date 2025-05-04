import { ILogger } from './interfaces/logger.interface';

// grafana-logger.ts
export class GrafanaLogger implements ILogger {
  log(msg: string, data?: any) {
    // Push to Grafana
  }
  error(msg: string, err: any) {
    // Push to Grafana
  }
}
