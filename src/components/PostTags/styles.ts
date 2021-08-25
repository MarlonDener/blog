import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    max-width: ${theme.font.sizes.content};

    span {
      margin: 0 0rem 0 0.5rem;
    }
    span::after {
      content: ', ';
    }
    span::before {
      content: ' ';
    }
    span:last-child::after {
      content: '';
    }
    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      &:hover {
        filter: brightness(50%);
        transition: all 300ms ease-in-out.;
      }
    }
  `}
`;
