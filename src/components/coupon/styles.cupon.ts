import { FaRegCheckCircle } from 'react-icons/fa';

import { debugMode, fadeIn } from '@/styles/shared.style';

import styled, { DefaultTheme } from 'styled-components';

interface CuponProps {
    $debug?: boolean;
}

interface StyledFieldSetProps {
    $containsValue: boolean;
    $focus: boolean;
    theme: DefaultTheme;
  }

export const StyledCupon = styled.section<CuponProps>`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    max-width: 1100px;
    gap: 0.2rem;
    animation: ${fadeIn} 0.5s ease-in-out;
    margin: 0.5rem auto 2rem auto;

    ${debugMode}

    ${({ theme }) => theme.media.mobile} {
        margin-top: 1rem;
    }
`;

export const StyledContainerInput = styled.fieldset<StyledFieldSetProps>`
  position: relative;
  display: flex;
  width: 20%;

  ${({ theme }) => theme.media.mobile} {
    width: 85%;
    margin: 0 auto;
  }

  & > label {
    position: absolute;
    top: ${({ $focus, $containsValue }) => $focus || $containsValue ? '0.25rem' : '50%'};
    left: 0.7rem;
    color: ${({ theme, $containsValue, $focus }) => $containsValue || $focus
    ? theme.colors.textOpacity
    : theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0 0.2rem;
    transform: translateY(-50%);
    transition: all 0.2s ease-in-out;
    pointer-events: none;
    font-size: ${({ $containsValue, $focus }) => $containsValue || $focus ? '0.8rem' : '1rem'};
  }

  & > input {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    padding: 14px 1rem;
    width: 100%;
    height: 3rem;
    appearance: none;
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.defaultBorder};
    border-radius: 0.5rem;
    outline: none;
    margin-top: 0.2rem;

    &:focus + label + select {
      top: 0.25rem;
      transform: translateY(-50%);
      font-size: 0.8rem;
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }

    ${({ theme }) => theme.media.mobile} {
      width: 100%;
    }
  }
`;

export const StyledCuponButton = styled(FaRegCheckCircle)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.textOpacity};
    background-color: ${({ theme }) => theme.colors.background};
    padding: 5px;
    border: ${({ theme }) => `1px solid ${theme.colors.defaultBorder}`};
    border-radius: 7px;
    cursor: pointer;
    width: 2.7rem;
    height: 2.7rem;
    transition: all 0.5s;

    ${({ theme }) => theme.media.mobile} {
        margin: 0 auto;
    }
`;
