import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xhuge};
    padding: 0 ${theme.spacings.large};
  `}
`;

export const searchContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xlarge};
    padding: 0 ${theme.spacings.large};
    max-width: 120rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
export const searchInput = styled.input`
  ${({ theme }) => css`
    padding: 1rem ${theme.spacings.small};
    margin: 0 3rem;
    border: 1px solid ${theme.colors.primary};
    min-width: 400px;
    box-shadow: 2px 1px 4px 2px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    outline: none;
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: 100rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xhuge};
  `}
`;

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`;
