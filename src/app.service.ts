import { Injectable } from '@nestjs/common';
import { Post } from './app.controller';

@Injectable()
export class AppService {
  getPost(): Post {
    return {
      author: 'kim young wan',
      title: '오늘 백엔드 공부 시작함',
      content: '오늘 내가 배운내용은 이거임',
      likeCount: 5,
      commentCount: 0,
    };
  }
}
