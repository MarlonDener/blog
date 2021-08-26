import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  svg.search-ok-icon,
  svg.search-cancel-icon {
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 1rem;
  }

  svg.search-cancel-icon {
    color: #d62738;
  }
`;

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
    box-shadow: 2px 1px 4px 2px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    outline: none;
    max-width: 400px;
    width: 80%;
    &:disabled {
      border: #ccc;
    }
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: 100rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.large};
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
