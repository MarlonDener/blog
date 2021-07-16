import * as Styled from './styles';

import { Menu as MenuIcon } from '@styled-icons/material-outlined';

import { LogoLink } from '../LogoLink';
import { MenuLink } from '../MenuLink';

export type MenuPropsLinks = {
  id: string;
  link: string;
  newTab?: boolean;
  text: string;
};

export type MenuProps = {
  links: MenuPropsLinks[];
  blogName: string;
  logo: string;
};

export function Menu({ links, blogName, logo }: MenuProps) {
  return (
    <>
      <Styled.OpenClose href="#">
        <MenuIcon aria-label="Abrir e fechar menu" />
      </Styled.OpenClose>
      <Styled.Wrapper>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" text={blogName} srcImg={logo} />
          </Styled.Logo>
          {links.map((link) => {
            return (
              <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
                {link.text}
              </MenuLink>
            );
          })}
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
}
