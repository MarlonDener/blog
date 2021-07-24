import * as Styled from './styles';
import Link from 'next/link';
import { Heading } from '../Heading';
import { StrapiImage } from '../../shared-types/strapi-image';
export type PostCardProps = {
  id: string;
  title: string;
  cover: StrapiImage;
  excerpt: string;
  slug: string;
};

export function PostCard({ title, cover, excerpt, slug }: PostCardProps) {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <a>
          <Styled.Cover src={cover.url} alt={title} />
        </a>
      </Link>
      <Heading as="h2" size="small">
        <Link href={`/post/${slug}`}>
          <a className="titleClass">{title}</a>
        </Link>
      </Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
}
