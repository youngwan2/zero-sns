import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './posts.service';

// 1) GET /posts
//    모든 post를 가져온다.

// 2) GET /posts/:id
//    id에 해당되는 post를 가져온다.

// 3) POST /posts
//    포스트를 생성한다.

// 4) PUT /posts/:id
//    id에 해당하는 포스트를 변경한다.

// 5) DELETE /posts/:id
//    id에 해당하는 포스트를 삭제한다.

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get() // '/'(루트) 경로
  getAllPost(): Post[] {
    return this.postsService.getAllPost(); // app.service 파일에서 가져옴
  }

  @Get(':id')
  getChoicePost(): Post {
    return this.postsService.getChoicePost(@Param('id'));
  }
}
