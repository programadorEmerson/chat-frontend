import { debugMode } from '@/styles/shared.style';

import styled from 'styled-components';

import { AlignProps } from './types';

type ContainerTitleProps = {
    $align: AlignProps;
    $debug?: boolean;
};

export const StyledContainerTitle = styled.div<ContainerTitleProps>`
    display: flex;
    width: 100%;
    justify-content: ${({ $align }) => $align};
    align-items: center;
    margin-top: 0.5rem;
    ${debugMode}

    & h6 {
        font-weight: 500;
        color: ${({ theme : { colors } }) => colors.text};
        text-align: ${({ $align }) => $align};
        ${debugMode}

        ${({ theme }) => theme.media.mobile} {
            text-align: center
        }
    }
`;
