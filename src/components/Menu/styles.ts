import styled, { css, DefaultTheme } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

type MenuBehaviorProps = {
  menuVisible: boolean;
};

const wrapperChanger = (
  menuVisible: MenuBehaviorProps['menuVisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuVisible ? '0' : '-31rem'};
  overflow-y: ${menuVisible ? 'auto' : 'hidden'};

  @media ${theme.media.Medium} {
    left: ${menuVisible ? '0' : '-32rem'};
  }
`;

export const Wrapper = styled.nav<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    background: ${theme.colors.primary};
    padding: 10rem 1rem 1rem 3rem};
    display: flex;
    position: fixed;
    z-index: 100%;
    width: 32rem;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 300ms ease-in-out;
    overflow-y: auto;
    ${wrapperChanger(menuVisible, theme)}
  `}
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    margin: auto;
    width: 100%;
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Logo = styled.nav`
  ${({ theme }) => css`
    ${HeadingStyles} {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacings.xxlarge};
      img {
        border: 0.3rem solid ${theme.colors.secondary};
      }
    }
  `}
`;

const buttonChanger = (
  menuVisible: MenuBehaviorProps['menuVisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuVisible ? '26rem' : '1rem'};
  color: ${menuVisible ? theme.colors.secondary : theme.colors.white};

  @media ${theme.media.Medium} {
    left: ${menuVisible ? '24rem' : '-0.6rem'};
  }
`;

export const OpenClose = styled.a<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    top: ${theme.spacings.medium};
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    z-index: 2;
    width: 3rem;
    height: 3rem;
    left: 24rem;
    transition: all 300ms ease-in-out;
    ${buttonChanger(menuVisible, theme)}
  `}
`;
