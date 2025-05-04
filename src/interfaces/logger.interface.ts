// logger.interface.ts
/**
 * Interface representing a logger service.
 * Provides methods for logging messages and errors.
 */
export interface ILogger {
  /**
   * Logs a message with optional additional data.
   *
   * @param message - The message to log.
   * @param data - Optional additional data to include with the log.
   */
  log(message: string, data?: any): void;

  /**
   * Logs an error message along with the associated error object.
   *
   * @param message - The error message to log.
   * @param error - The error object containing details about the error.
   */
  error(message: string, error: any): void;
}
