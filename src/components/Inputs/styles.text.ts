import styled, { DefaultTheme, css } from 'styled-components';

interface StyledFieldSetProps {
  $containsError: boolean;
  $containsValue: boolean;
  $focus: boolean;
  theme: DefaultTheme;
  position: 'top' | 'bottom' | 'left' | 'right';
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
  flex-direction: column;
  animation: ${({ $containsError }) =>
    $containsError && 'shake 0.3s ease-in-out'};

  & > span {
    color: ${({ theme }) => theme.colors.error};
    font-size: 0.8rem;
    margin: 0.2rem 0 0 0.9rem;
    opacity: ${({ $containsError }) => ($containsError ? '1' : '0')};
    transition: opacity 0.2s ease-in-out;
  }

  & > label {
    position: absolute;
    top: ${({ $containsValue, $containsError, $focus }) =>
    $containsValue || $focus ? '0' : $containsError ? '37%' : '50%'};
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
    font-size: 0.8rem;
    pointer-events: none;
    font-size: ${({ $containsValue, $focus }) =>
    $containsValue || $focus ? '0.8rem' : '1rem'};
  }

  & > input {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    padding: 14px 1rem;
    height: 3rem;
    position: relative;
    width: 100%;
    border: 1px solid
      ${({ theme, $containsError }) =>
    $containsError ? theme.colors.error : theme.colors.defaultBorder};
    border-radius: 0.5rem;
    outline: none;

    &:focus + label {
      top: 0;
      transform: translateY(-50%);
      font-size: 0.8rem;
    }

    &:focus {
      border-color: ${({ theme, $containsError }) =>
    $containsError ? theme.colors.error : theme.colors.primary};
    }
  }

  & > input:disabled {
    color: #919eab;
  }

  & > button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: ${({ $containsError }) => ($containsError ? '34%' : '47%')};
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

export default StyledFieldSet;
