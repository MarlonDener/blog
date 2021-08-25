import { SettingsStrapi } from '../../shared-types/settings-strapi';
import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { useRouter } from 'next/dist/client/router';
import { ToggleTheme } from '../../ToggleTheme';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export function BaseTemplate({ settings, children }: BaseTemplateProps) {
  const router = useRouter();

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
        <form action="/search/" method="GET">
          <Styled.searchInput
            type="search"
            placeholder="Busque por artigos"
            name="q"
            defaultValue={router?.query?.q || ''}
          />
        </form>
      </Styled.searchContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={settings.text} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
}
