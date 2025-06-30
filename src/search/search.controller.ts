// search.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post('add')
  async addDoc(@Body() body: any) {
    return this.searchService.indexDocument('my_index', body.id, body);
  }

  @Post('query')
  async query(@Body() body: any) {
    const query = {
      match: {
        title: body.keyword,
      },
    };
    return this.searchService.search('my_index', query);
  }

  @Post('delete')
  async deleteDoc(@Body() body: any) {
    return this.searchService.deleteDocument(body.id, body);
  }
}
