import styled, { css } from 'styled-components';

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
    margin: ${theme.spacings.large} auto;
    display: flex;
    justify-content: center;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    padding: ${theme.spacings.small} ${theme.spacings.large};
    cursor: pointer;
    border-radius: 7px;
    box-shadow: 4px 5px 3px 1px rgba(0, 0, 0, 0.4);
    transition: 0.7s ease-in-out;

    &:hover {
      ${theme.colors.secondary};
    }

    &:disabled {
      background: ${theme.colors.darkerGray};
    }
  `}
`;
