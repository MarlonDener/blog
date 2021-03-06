import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.large};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    ${HeadingStyles} {
      margin: 0;
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;

export const Excerpt = styled.p`
  ${({ theme }) => css`
    font-size: 2rem;
    line-height: 26px;
  `}
`;

export const Cover = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    display: block;
    margin-bottom: ${theme.spacings.medium};
  `}
`;
