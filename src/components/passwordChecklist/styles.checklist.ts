import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const StyledContainerPasswordChecklist = styled.section<{$focusInPassword: boolean}>`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.colors.defaultBorder};
  padding: 0.5rem;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 3%;
  top: -12%;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.21);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.21);
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.21);
  visibility: ${({ $focusInPassword }) => ($focusInPassword ? 'visible' : 'hidden')};
  opacity: ${({ $focusInPassword }) => ($focusInPassword ? '1' : '0')};
  animation: ${({ $focusInPassword }) =>
    $focusInPassword
      ? css`${fadeIn} 0.5s ease-out forwards`
      : css`${fadeOut} 0.5s ease-out forwards`};
  transition: visibility 0.5s, opacity 0.5s; 

  ${({ theme }) => theme.media.mobile} {
    right: 0;
    top: 20%;
    z-index: 11235;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
