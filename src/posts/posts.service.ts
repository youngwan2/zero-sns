import { Injectable, NotFoundException } from '@nestjs/common';

export interface Posts {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

const posts: Posts[] = [
  {
    id: 1,
    author: 'kim young wan',
    title: '제목',
    content: '오늘은 백엔드',
    likeCount: 5,
    commentCount: 0
  },
  {
    id: 2,
    author: 'kim young wan',
    title: '제목',
    content: '오늘은 백엔드',
    likeCount: 5,
    commentCount: 0
  },
  {
    id: 3,
    author: 'kim young wan',
    title: '제목',
    content: '오늘은 백엔드',
    likeCount: 5,
    commentCount: 0
  }
];

@Injectable()
export class PostsService {
  getPosts(): Posts[] {
    return posts;
  }

  getPost(id: number): Posts[] {
    const pick = posts.filter((post) => {
      return post.id === id;
    });
    const hasPost = pick.length > 0;
    if (!hasPost) {
      throw new NotFoundException();
    }
    return pick;
  }

  addPost(newPost: Posts) {
    posts.push(newPost);
    console.log(posts);
  }
}
