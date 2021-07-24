import { PostProps } from '../components/Post';

export type PostStrapi = PostProps & {
  tags: PostProps;
  slug: string;
};
