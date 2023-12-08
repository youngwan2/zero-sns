import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// sns 포스트 타입 정의

export interface Post {
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

@Controller('post')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('post') // '/'(루트) 경로
  getPost(): Post {
    return this.appService.getPost(); // app.service 파일에서 가져옴
  }
}
