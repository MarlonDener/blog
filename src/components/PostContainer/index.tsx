import styled, { css, DefaultTheme } from 'styled-components';

export type PostContainerProps = {
  size: 'max' | 'content';
};

const postContainerStyles = {
  max: (theme: DefaultTheme) => css`
    max-width: ${theme.font.sizes.max};
  `,

  content: (theme) => css`
    max-width: ${theme.font.sizes.max};
  `,
};

export const PostContainer = styled.div<PostContainerProps>`
  ${({ theme, size }) => css`
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.spacings.large};
    ${postContainerStyles[size](theme)};
  `}
`;
