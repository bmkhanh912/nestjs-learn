import { IEvent } from './base.interface';

/**
 * Interface representing a repository for managing events.
 */
export interface IEventRepository {
  /**
   * Retrieves all events from the repository.
   *
   * @returns A promise that resolves to an array of events.
   */
  findAll(): Promise<IEvent[]>;

  /**
   * Finds an event by its unique identifier.
   *
   * @returns A promise that resolves to the event if found, or null if not found.
   */
  findById(): Promise<IEvent | null | string>;
}
