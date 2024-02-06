import styled from 'styled-components';

const StyledFieldSet = styled.fieldset<{
  $containsError: boolean;
  $containsValue: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;

  & > span {
    color: ${({ theme }) => theme.colors.error};
    font-size: 0.8rem;
    margin: 0.2rem 0 0 0.9rem;
    opacity: ${({ $containsError }) => ($containsError ? '1' : '0')};
    transition: opacity 0.2s ease-in-out;
  }

  & > label {
    position: absolute;
    top: ${({ $containsValue, $containsError }) =>
    $containsValue ? '0' : $containsError ? '36%' : '50%'};
    left: 0.7rem;
    color: ${({ theme, $containsValue, $containsError }) =>
    $containsError
      ? theme.colors.error
      : $containsValue
        ? theme.colors.textOpacity
        : theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0 0.2rem;
    transform: translateY(-50%);
    transition:
      transform 0.2s ease-in-out,
      top 0.2s ease-in-out,
      /* font-size 0.2s ease-in-out, */ color 0.2s ease-in-out;
    font-size: 0.8rem;
    pointer-events: none;
    font-size: ${({ $containsValue }) => ($containsValue ? '0.8rem' : '1rem')};
  }

  & > input {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    padding: 14px 1rem;
    height: 3rem;
    position: relative;
    width: 100%;
    border: 1px solid ${({ theme, $containsError }) =>
    $containsError ? theme.colors.error : theme.colors.defaultBorder};
    border-radius: 0.5rem;
    outline: none;
    animation: ${({ $containsError }) => $containsError && 'shake 0.3s ease-in-out'};

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

  @media (max-width: 640px) {
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
