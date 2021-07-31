import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: ${theme.spacings.xhuge};
    width: 100%;
    max-width: 96rem;
    color: ${theme.colors.darkText};
    font-size: ${theme.font.sizes.small};
    margin: 0 auto;
    ${HeadingStyles} {
      margin: 0 0 ${theme.spacings.small} 0;
    }

    @media ${theme.media.Medium} {
      display: flex;
      flex-flow: column wrap;
      padding-bottom: ${theme.spacings.small};
      & > ${HeadingStyles}
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    flex-flow: column wrap;
    margin-left: ${theme.spacings.large};
    max-width: 48rem;
    @media ${theme.media.Medium} {
      margin-left: 0;
    }
  `}
`;
