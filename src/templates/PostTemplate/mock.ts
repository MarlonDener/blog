import { data } from '../../api/data.json';
import { PostTemplateProps } from '.';

export default {
  settings: data.setting,
  post: data.posts[0],
} as PostTemplateProps;
