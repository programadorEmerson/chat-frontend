import { debugMode } from '@/styles/shared.style';

import styled from 'styled-components';

export interface ContainerPackageProps {
    $debug?: boolean;
}

export const StyledContainerPackage = styled.section<ContainerPackageProps>`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    ${debugMode}
`;

export const StyledContentPackage = styled.section<ContainerPackageProps>`
    display: flex;
    width: 96%;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    gap: 0.855rem;

    ${({ theme }) => theme.media.mobile} {
        width: 100%;
    }

    ${debugMode}
`;
