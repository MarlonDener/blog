import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;
export const NotFound = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    justify-content: center;
    max-width: 120rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${theme.spacings.large};
    padding: ${theme.spacings.large};

    @media (${theme.media.Small}) {
      grid-template-columns: 1fr;
    }
  `}
`;
