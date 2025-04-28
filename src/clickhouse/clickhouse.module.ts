// src/clickhouse/clickhouse.module.ts
import { Module, Global } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from '@clickhouse/client';

const ClickHouseProvider = {
  provide: 'CLICKHOUSE_CLIENT',
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    return createClient({
      url: process.env.CLICKHOUSE_HOST,
      username: process.env.CLICKHOUSE_USER,
      password: process.env.CLICKHOUSE_PASS,
      database: process.env.CLICKHOUSE_DB,
    });
  },
};

@Global()
@Module({
  providers: [ClickHouseProvider],
  exports: [ClickHouseProvider],
})
export class ClickHouseModule {}
