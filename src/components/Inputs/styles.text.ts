import styled, { DefaultTheme, css } from 'styled-components';

interface StyledFieldSetProps {
  $containsError: boolean;
  $containsValue: boolean;
  $focus: boolean;
  theme: DefaultTheme;
  position: 'top' | 'bottom' | 'left' | 'right';
  width: number;
}

const borderColor = ({
  theme,
  $containsError,
  $focus,
}: Partial<StyledFieldSetProps>) => {
  return $containsError
    ? theme!.colors.error
    : $focus
      ? theme!.colors.primary
      : theme!.colors.defaultBorder;
};

const borderPosition = ({ position }: Partial<StyledFieldSetProps>) => {
  switch (position) {
  case 'top':
    return css`
        border-top: 1px solid ${borderColor};
      `;
  case 'bottom':
    return css`
        border-bottom: 1px solid ${borderColor};
      `;
  case 'left':
    return css`
        border-left: 1px solid ${borderColor};
      `;
  default:
    return css`
        border-right: 1px solid ${borderColor};
      `;
  }
};

const StyledFieldSet = styled.fieldset<Partial<StyledFieldSetProps>>`
  position: relative;
  display: flex;
  width: ${({ width }) => `calc(${width}% - 0.4rem)`};
  flex-direction: column;
  
  animation: ${({ $containsError }) =>
    $containsError && 'shake 0.3s ease-in-out'};

  & > span {
    color: ${({ theme }) => theme.colors.error};
    font-size: 0.8rem;
    margin: 0.2rem 0 0.3rem 0.9rem;
  }

  & > label {
    position: absolute;
    top: ${({ $containsValue, $containsError, $focus }) =>
    $containsValue || $focus ? '0.25rem' : $containsError ? '33%' : '50%'};
    left: 0.7rem;
    color: ${({ theme, $containsValue, $containsError, $focus }) =>
    $containsError
      ? theme.colors.error
      : $containsValue || $focus
        ? theme.colors.textOpacity
        : theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0 0.2rem;
    transform: translateY(-50%);
    transition: all 0.2s ease-in-out;
    pointer-events: none;
    font-size: ${({ $containsValue, $focus }) =>
    $containsValue || $focus ? '0.8rem' : '1rem'};
  }

  & > input, select {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    padding: 14px 1rem;
    width: 100%;
    height: 3rem;
    /* appearance: none; */
    position: relative;
    border: 1px solid
      ${({ theme, $containsError }) =>
    $containsError ? theme.colors.error : theme.colors.defaultBorder};
    border-radius: 0.5rem;
    outline: none;
    margin-top: 0.2rem;

    &:focus + label + select {
      top: 0.25rem;
      transform: translateY(-50%);
      font-size: 0.8rem;
    }

    &:focus {
      border-color: ${({ theme, $containsError }) =>
    $containsError ? theme.colors.error : theme.colors.primary};
    }

    ${({ theme }) => theme.media.mobile} {
      width: 100%;
    }

  }
  
  & select {
    top: 0.25rem;
  }

  & input[type="number"] {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
  }

  & input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

  & > input:disabled,
  & > select:disabled {
    color: #919eab;
  }


  & > button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: ${({ $containsError }) => ($containsError ? '32%' : '50%')};
    transform: translateY(-50%);
    background-color: ${({ theme, $containsError }) =>
    $containsError
      ? theme.colors.backgroundErrorContrast
      : theme.colors.backgroundContrast};
    border: none;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    padding: 0;
    height: 3rem;
    width: 2rem;
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    ${borderPosition({ position : 'top' })};
    ${borderPosition({ position : 'right' })};
    ${borderPosition({ position : 'bottom' })};
    transition: background-color 0.2s ease-in-out;

    & > svg {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-3px);
    }
    50% {
      transform: translateX(3px);
    }
    75% {
      transform: translateX(-3px);
    }
  }
`;

export const StyledFieldSetSelect = styled.fieldset<Partial<StyledFieldSetProps>>`
  position: relative;
  display: flex;
  width: ${({ width }) => `calc(${width}% - 0.4rem)`};
  flex-direction: column;

  & > span {
    color: ${({ theme }) => theme.colors.error};
    font-size: 0.8rem;
    margin: 0.2rem 0 0.3rem 0.9rem;
  }

  & > label {
    position: absolute;
    top: -0.4rem;
    left: 0.7rem;
    color: ${({ theme, $containsError }) =>
    $containsError
      ? theme.colors.error
      : theme.colors.textOpacity};
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0 0.2rem;
    font-size: 0.8rem;
  }

  & > select {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme, $containsError }) => ($containsError ? theme.colors.error : theme.colors.text)};
    padding: 14px 1rem;
    width: 100%;
    height: 3rem;
    position: relative;
    border: 1px solid
      ${({ theme, $containsError }) =>
    $containsError ? theme.colors.error : theme.colors.defaultBorder};
    border-radius: 0.5rem;
    outline: none;
    margin-top: 0.2rem;

    & > label {
      top: 0.25rem;
      transform: translateY(-50%);
      font-size: 0.8rem;
    }

    &:focus {
      border-color: ${({ theme, $containsError }) =>
    $containsError ? theme.colors.error : theme.colors.primary};
    }

    ${({ theme }) => theme.media.mobile} {
      width: 100%;
    }

  }

  & > select:disabled {
    color: #919eab;
  }

  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;

export default StyledFieldSet;
