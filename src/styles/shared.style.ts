import styled, { DefaultTheme, css } from 'styled-components';

export interface DebugStyledProps {
    $debug?: boolean;
    theme: DefaultTheme;
}

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
