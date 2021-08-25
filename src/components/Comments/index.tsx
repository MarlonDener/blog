import * as Styled from './styles';
import { DiscussionEmbed } from 'disqus-react';

export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
  allowComments: boolean;
};

export function Comments({ id, slug, title, allowComments }: CommentsProps) {
  if (!allowComments) {
    return null;
  }
  return (
    <Styled.Wrapper>
      <DiscussionEmbed
        shortname="marlon-blog"
        config={{
          url: `https://blog-marlon-blog.vercel.app/post/${slug}`,
          identifier: id,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Styled.Wrapper>
  );
}
