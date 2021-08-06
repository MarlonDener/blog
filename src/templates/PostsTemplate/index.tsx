import Head from 'next/head';
import { useState } from 'react';
import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';
import * as Styled from './styles';

export type PostsTemplateProps = {
  settings?: SettingsStrapi;
  posts?: PostStrapi[];
};

const PostsTemplate = ({ settings, posts }: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts);

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
        <Styled.ButtonContainer>
          <Styled.Button>Carregar mais</Styled.Button>
        </Styled.ButtonContainer>
      </BaseTemplate>
    </>
  );
};
export default PostsTemplate;
