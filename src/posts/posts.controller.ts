import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Posts, PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(): Posts[] {
    return this.postsService.getPosts();
  }

  @Get(':id')
  getPost(@Param() param: { id: string }): Posts[] {
    const { id } = param;
    console.log(param);
    return this.postsService.getPost(Number(id));
  }

  @Post()
  addPost(@Body('author') newPost: Posts) {
    console.log(newPost);
    return this.postsService.addPost(newPost);
  }
}
