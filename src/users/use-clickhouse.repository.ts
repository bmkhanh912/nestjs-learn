import { Inject, Injectable } from '@nestjs/common';

import { ClickHouseClient } from '@clickhouse/client';

@Injectable()
export class UserClickhouseRepository {
  constructor(
    @Inject('CLICKHOUSE_CLIENT')
    private readonly clickhouseClient: ClickHouseClient,
  ) {}

  async findUserLog(): Promise<any> {
    const homepageQuery = `
      SELECT event_date, count(*) AS view_count
      FROM event__22_03_25
      WHERE page_id = 'home'
      GROUP BY event_date
      ORDER BY event_date
    `;

    const result = await this.clickhouseClient.query({
      query: homepageQuery,
      format: 'JSON',
    });

    const queryResponse = await result.json();
    return queryResponse.data;
  }
}
