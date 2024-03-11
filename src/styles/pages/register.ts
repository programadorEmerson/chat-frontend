import styled from 'styled-components';

import { DebugStyledProps, debugMode, fadeIn } from '../shared.style';

interface FooterProps extends DebugStyledProps {
  $align: 'left' | 'right';
}

export const StyledContainerRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

export const StyledContentSteps = styled.section`
  display: flex;
  padding: 1rem;
  margin-top: 2rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyledContainerInputs = styled.section<DebugStyledProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  & > div {
    min-height: 300px;
    max-width: 1000px;
    width: 100%;

    ${({ theme }) => theme.media.mobile} {
      min-height: 100%;
    }
  }

  ${debugMode}
`;

export const StyledContentInputs = styled.section<DebugStyledProps>`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
  gap: 0.5rem;
  padding: 1rem;
  animation: ${fadeIn} 0.5s ease-in-out;

  ${debugMode}

  ${({ theme }) => theme.media.mobile} {
    max-width: 100%;
  }
`;

export const StyledContainerButtonActions = styled.section<DebugStyledProps>`
  display: flex;
  align-items: self-start;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
  gap: 0.5rem;
  animation: ${fadeIn} 0.5s ease-in-out;

  ${debugMode}

  ${({ theme }) => theme.media.mobile} {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

export const StyledFooterActions = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  /* position: absolute; */
  bottom: 0;

  ${({ theme }) => theme.media.mobile} {
    position: relative;
    margin-bottom: 2rem;
  }
`;

export const StyledSectionActions = styled.section<FooterProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ $align }) => $align};
  width: 40%;
  padding: 0 1rem;

  ${debugMode}

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;
