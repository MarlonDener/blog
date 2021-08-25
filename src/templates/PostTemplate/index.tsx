import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';
import { Post } from '../../components/Post';
import { PostTags } from '../../components/PostTags';
import * as Styled from './styles';
import { Comments } from '../../components/Comments';

export type PostTemplateProps = {
  settings?: SettingsStrapi;
  post?: PostStrapi;
};

export function PostTemplate({ settings, post }: PostTemplateProps) {
  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />
      <Styled.TagsContainer>
        <PostTags tags={post.tags} />
      </Styled.TagsContainer>
      <Comments
        title={post.title}
        slug={post.slug}
        id={post.id}
        allowComments={post.allowComments}
      />
    </BaseTemplate>
  );
}
