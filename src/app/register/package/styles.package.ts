/* eslint-disable max-len */
import { debugMode } from '@/styles/shared.style';

import styled from 'styled-components';

export interface ContainerPackageProps {
    $debug?: boolean
    $selected?: boolean
}

export const StyledContainerPackage = styled.section<ContainerPackageProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    width: 180px;
    height: 220px;
    box-shadow: 0px 0px 12px -5px rgba(0,0,0,0.45);

    ${debugMode}
`;

export const StyledHr = styled.hr`
  width: 100%;
  height: 2px;
  border: none;
  margin: 0 0.5rem;
  background: linear-gradient(to right, 
    ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors.defaultBorder} 10%,
    ${({ theme }) => theme.colors.defaultBorder} 90%,
    ${({ theme }) => theme.colors.background});
`;

export const StyledTitlePackage = styled.h1`
    font-size: 1rem;
    padding: 5px;
    text-align: center;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-left: 1.5px solid ${({ theme }) => theme.colors.backgroundContrast};
    border-right: 1.5px solid ${({ theme }) => theme.colors.backgroundContrast};
    border-top: 1.5px solid ${({ theme }) => theme.colors.backgroundContrast};
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
`;

export const StyledImagePackage = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
    object-fit: contain;
    object-position: center;
    flex: 1;
    border-left: 1.5px solid ${({ theme }) => theme.colors.backgroundContrast};
    border-right: 1.5px solid ${({ theme }) => theme.colors.backgroundContrast};
`;

export const StyledSelectPackage = styled.button<{ $selected: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ $selected, theme }) => $selected ? theme.colors.success : theme.colors.warning};
    padding: 5px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    width: 100%;
    height: 35px;
    transition: all 0.5s;
    border-left: 1.5px solid ${({ theme, $selected }) => $selected ? theme.colors.success : theme.colors.backgroundContrast};
    border-right: 1.5px solid ${({ theme, $selected }) => $selected ? theme.colors.success : theme.colors.backgroundContrast};
    border-bottom: 1.5px solid ${({ theme, $selected }) => $selected ? theme.colors.success : theme.colors.backgroundContrast};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.success};
        border-left: 1.5px solid ${({ theme }) => theme.colors.success};
        border-right: 1.5px solid ${({ theme }) => theme.colors.success};
        border-bottom: 1.5px solid ${({ theme }) => theme.colors.success};
        filter: ${({ $selected }) => $selected && 'brightness(1.1)'};
    }
`;
