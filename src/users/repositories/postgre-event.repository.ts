import { IEvent } from '../interfaces/base.interface';
import { IEventRepository } from '../interfaces/IEventRepository';

/**
 * Repository implementation for handling events using PostgreSQL.
 * This class provides methods to interact with the PostgreSQL database
 * for retrieving event data.
 *
 * @implements {IEventRepository}
 */
export class PostgresEventRepository implements IEventRepository {
  async findAll(): Promise<IEvent[]> {
    // Thực thi bằng PostgreSQL
    return [];
  }

  async findById(): Promise<IEvent | null | string> {
    // PostgreSQL logic
    return 'null';
  }
}
