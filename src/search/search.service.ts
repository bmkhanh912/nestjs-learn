// search.service.ts
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { SearchRequest } from '@elastic/elasticsearch/lib/api/types';

@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async indexDocument(index: string, id: string, body: any) {
    return this.elasticsearchService.index({
      index,
      id,
      body,
    });
  }

  async search<T>(index: string, query: Record<string, any>): Promise<T[]> {
    const RESULT = await this.elasticsearchService.search<T>({
      index,
      body: {
        //@ts-ignore
        query,
      },
    });
    return RESULT.hits.hits.map((hit) => hit._source as T);
  }

  async deleteDocument(index: string, id: string) {
    return this.elasticsearchService.delete({
      index,
      id,
    });
  }
}
