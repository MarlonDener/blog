import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';
export const Wrapper = styled.div`
  border-radius: 1rem;
  box-shadow: 1rem 0.4rem 2rem 1rem rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => css`
    ${Title} {
      margin: 0;
      margin-top: 1.1rem;
      padding: 0;
      max-width: 100%;
    }
    cursor: pointer;
    a {
      text-decoration: none;
      color: inherit;
    }
    .titleClass {
      color: ${theme.colors.primary};
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
  width: 100%;
  object-fit: contain;
  margin: 0 auto;
`;

export const Excerpt = styled.p`
  ${({ theme }) => css`
    position: relative;
    top: -10px;
    max-width: 100%;
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const classToSpacings = styled.div`
  ${({ theme }) => css`
    padding: 1rem 1.1rem;
  `}
`;
