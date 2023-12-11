import { Injectable } from '@nestjs/common';

export interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: 'kim young wan',
    title: '오늘은 내가 벡엔드',
    content: '오늘은 내가 벡엔드 엔지니어가 되어서 서버를 개발했다.',
    likeCount: 555,
    commentCount: 5555,
  },
  {
    id: 2,
    author: 'kim young wan',
    title: '오늘은 내가 벡엔드2',
    content: '오늘은 내가 벡엔드 엔지니어가 되어서 서버를 개발했다.22',
    likeCount: 5552,
    commentCount: 55552,
  },
  {
    id: 3,
    author: 'kim young wan',
    title: '오늘은 내가 벡엔드4',
    content: '오늘은 내가 벡엔드 엔지니어가 되어서 서버를 개발했다.5',
    likeCount: 555,
    commentCount: 5555,
  },
];

@Injectable()
export class PostsService {
  getAllPost(): Post[] {
    return posts;
  }

  getChoicePost(id): Post {
    return posts[id];
  }
}
