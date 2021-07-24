import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';
export const Wrapper = styled.div`
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 1rem;
  box-shadow: 0.3rem 0.4rem 0.3rem 0.2rem rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 2.5rem;
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
  object-fit: cover;
  border-radius: 2rem;
  max-height: 200px;
  margin: 0 auto;
  min-height: 200px;
`;

export const Excerpt = styled.p`
  ${({ theme }) => css`
    position: relative;
    top: -10px;
    max-width: 100%;
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
