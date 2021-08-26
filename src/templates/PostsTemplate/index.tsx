import Head from 'next/head';
import { useEffect, useState } from 'react';
import { loadPosts, LoadPostsVariables } from '../../api/load-posts';
import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';
import * as Styled from './styles';

export type PostsTemplateProps = {
  settings?: SettingsStrapi;
  posts?: PostStrapi[];
  variables?: LoadPostsVariables;
};

const PostsTemplate = ({ settings, posts, variables }: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  useEffect(() => {
    setStatePosts(posts);
    setNoMorePosts(false);
    setButtonDisabled(false);
    setStateVariables(variables);
  }, [posts, variables]);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);
    const newVariables = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit,
    };

    const morePosts = await loadPosts(newVariables);

    if (!morePosts || !morePosts.posts || !morePosts.posts.length) {
      setNoMorePosts(true);
      return;
    }

    setButtonDisabled(false);
    setStateVariables(newVariables);
    setStatePosts((p) => [...p, ...morePosts.posts]);
  };
  return (
    <>
      <Head>
        <title>Marlon Dener | Tecnologia</title>
        <meta
          name="description"
          content="Melhores artigos sobre tecnologia, assuntos, mercado de trabalho para desenvolvedor, portfolio, conselhos para devs, dicas para devs"
        />
        <meta name="author" content="Marlon Dener" />
        <meta
          name="keywords"
          content="tecnologia, devs, mercado de trabalho, desenvolvedor, sites, web, desenvolvimento"
        />
      </Head>
      <BaseTemplate settings={settings}>
        <PostGrid posts={statePosts} />
        {statePosts && statePosts.length ? (
          <Styled.ButtonContainer>
            <Styled.Button
              onClick={handleLoadMorePosts}
              disabled={buttonDisabled}
            >
              {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
            </Styled.Button>
          </Styled.ButtonContainer>
        ) : null}
      </BaseTemplate>
    </>
  );
};
export default PostsTemplate;
