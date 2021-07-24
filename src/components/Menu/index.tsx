import * as Styled from './styles';

import React, { useState } from 'react';

import { LogoLink } from '../LogoLink';
import { MenuLink } from '../MenuLink';

import { Menu as MenuIcon } from '@styled-icons/material-outlined';
import { Close as CloseIcon } from '@styled-icons/material-outlined';

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
  const [menuVisible, setMenuVisible] = useState(false);
  const handleOpenCloseMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible((v) => !v);
  };

  return (
    <>
      <Styled.OpenClose
        href="#"
        menuVisible={menuVisible}
        aria-label="Open or close menu"
        onClick={handleOpenCloseMenu}
      >
        {menuVisible && <CloseIcon aria-label="Close menu" />}
        {!menuVisible && <MenuIcon aria-label="Open menu" />}
      </Styled.OpenClose>
      <Styled.Wrapper menuVisible={menuVisible} aria-hidden={!menuVisible}>
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
