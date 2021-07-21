import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    a {
      text-decoration: none;
      color: inherit;
    }
    .titleClass {
      color: ${theme.colors.primary};
      display: block;
      padding-top: ${theme.spacings.small};
      font-size: ${theme.font.sizes.medium};
    }

    &:hover a {
      color: ${theme.colors.secondary};
    }
    &:hover img {
      opacity: 0.8;
    }
  `}
`;

export const Cover = styled.img`
  max-width: 100%;
  transition: opacity 300ms ease-in-out;
`;

export const Excerpt = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;
