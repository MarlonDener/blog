import { SettingsStrapi } from '../../shared-types/settings-strapi';
import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { useRouter } from 'next/dist/client/router';
import { ToggleTheme } from '../../ToggleTheme';
import { useState, useRef, useEffect } from 'react';

//icon material outline
import { Cancel } from '@styled-icons/material-outlined/Cancel';
import { CheckCircleOutline } from '@styled-icons/material-outlined/CheckCircleOutline';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export function BaseTemplate({ settings, children }: BaseTemplateProps) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router?.query?.q || '');
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const inputTimeout = useRef(null);

  useEffect(() => {
    if (isReady) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeout.current);

    if (router?.query?.q === searchValue) {
      return;
    }

    const q = searchValue;

    if (!q || q.length < 3) {
      return;
    }

    inputTimeout.current = setTimeout(() => {
      setIsReady(false);
      router
        .push({
          pathname: '/search',
          query: { q: searchValue },
        })
        .then(() => setIsReady(true));
    }, 600);
    return () => clearTimeout(inputTimeout.current);
  }, [searchValue, router]);

  return (
    <Styled.Wrapper>
      <ToggleTheme />
      <Menu
        links={settings.menuLink}
        blogName={settings.blogName}
        logo={settings.blogLogo.url}
      />

      <Styled.HeaderContainer>
        <Header
          blogName={settings.blogName}
          blogDescription={settings.blogDescription}
          logo={settings.blogLogo.url}
        />
      </Styled.HeaderContainer>

      <Styled.searchContainer>
        <Styled.searchInput
          type="search"
          placeholder="Busque por artigos"
          name="q"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          disabled={searchDisabled}
        />
        {searchDisabled ? (
          <Cancel className="search-cancel-icon" aria-label="Input disabled" />
        ) : (
          <CheckCircleOutline
            className="search-ok-icon"
            aria-label="Input enabled"
          />
        )}
      </Styled.searchContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={settings.text} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
}
