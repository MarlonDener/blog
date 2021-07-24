import { SettingsStrapi } from '../../shared-types/settings-strapi';
import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export function BaseTemplate({ settings, children }: BaseTemplateProps) {
  return (
    <Styled.Wrapper>
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
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={settings.text} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
}
