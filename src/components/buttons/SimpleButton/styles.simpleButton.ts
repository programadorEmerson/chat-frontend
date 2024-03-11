import { HTMLAttributes } from 'react';

import styled from 'styled-components';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const StyledSimpleButton = styled.button<ButtonProps>`
    background-color: ${(props) => {
    return props['aria-label'] === 'save'
      ? props.theme.colors.success
      : props['aria-label'] === 'next'
        ? props.theme.colors.primary
        : props.theme.colors.warning;
  }};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: filter 0.2s;
    min-width: 7rem;
    
    &:hover {
        filter: brightness(0.95);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        filter: brightness(1);
    }

    &:focus {
        outline: none;
    }

    ${({ theme }) => theme.media.mobile} {
        min-width: 100%;
    }
`;
