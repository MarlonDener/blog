import { GetStaticProps } from 'next';
import { loadPosts, StrapiPostAndSettings } from '../api/load-posts';
import PostsTemplate from '../templates/PostsTemplate';

export default function index({ posts, setting }: StrapiPostAndSettings) {
  return <PostsTemplate posts={posts} settings={setting} />;
}

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> =
  async () => {
    let data = null;

    try {
      data = await loadPosts();
    } catch (e) {
      data = null;
    }

    if (!data || !data.posts || !data.posts.length) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        posts: data.posts,
        setting: data.setting,
      },
      revalidate: 60,
    };
  };
