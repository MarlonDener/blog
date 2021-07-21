import { PostProps } from '../Post';
import * as Styled from './styles';
import Link from 'next/link';
import { Heading } from '../Heading';

export type PostCardProps = PostProps;

export function PostCard({ title, cover, excerpt, slug }: PostCardProps) {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <a>
          <Styled.Cover src={cover.url} />
        </a>
      </Link>
      <Link href={`/post/${slug}`}>
        <a className="titleClass">{title}</a>
      </Link>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
}
