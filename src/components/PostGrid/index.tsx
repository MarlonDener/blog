import * as Styled from './styles';
import { PostCard, PostCardProps } from '../PostCard';

export type PostGridProps = {
  posts?: PostCardProps[];
};

export function PostGrid({ posts = [] }: PostGridProps) {
  return (
    <Styled.Wrapper>
      {!posts.length && (
        <Styled.NotFound>Nenhum post foi encontrado</Styled.NotFound>
      )}

      <Styled.Grid>
        {posts.length > 0 &&
          posts.map((post) => {
            return <PostCard key={`post-card-${post.id}`} {...post}></PostCard>;
          })}
      </Styled.Grid>
    </Styled.Wrapper>
  );
}
