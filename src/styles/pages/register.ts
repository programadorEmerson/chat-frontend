import styled from 'styled-components';

import { DebugStyledProps, debugMode } from '../shared.style';

interface FooterProps extends DebugStyledProps {
  align: 'left' | 'right';
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
  justify-content: center;
  flex-direction: column;

  ${debugMode}
`;

export const StyledContentInputs = styled.section<DebugStyledProps>`
  display: flex;
  align-items: self-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
  gap: 0.5rem;
  padding: 1rem;

  ${debugMode}

  ${({ theme }) => theme.media.mobile} {
    max-width: 100%;
  }
`;

export const StyledFooterActions = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
`;

export const StyledSectionActions = styled.section<FooterProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align};
  width: 50%;
  padding: 0 1rem;

  ${debugMode}

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }
`;
