import styled, { DefaultTheme, css, keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export interface DebugStyledProps {
    $debug?: boolean;
    theme: DefaultTheme;
}

type RegisterProps = {
  $debug?: boolean;
};

export const debugMode = ({ $debug }: DebugStyledProps) => css`
    border: ${({ theme : { colors } }) => ($debug && `1px solid ${colors.debugBorder}`)};
    background-color: ${({ theme : { colors } }) => ($debug && colors.debugBackground)};
    margin: ${() => ($debug && '0.2rem 0')};
`;

export const StyledContainerTitle = styled.div`
    display: flex;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: start;
    ${debugMode}
`;

export const StyledHr = styled.hr`
  width: 100%;
  max-width: 1100px;
  height: 2px;
  border: none;
  margin: 2rem 0;
  background: linear-gradient(to right, 
    ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors.defaultBorder} 10%,
    ${({ theme }) => theme.colors.defaultBorder} 90%,
    ${({ theme }) => theme.colors.background});
`;

export const StyledRowContainerWrapper = styled.section<RegisterProps>`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;

  ${debugMode}
`;

export const StyledColumnContainerWrapper = styled.section<RegisterProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${debugMode}
`;
