import styled from 'styled-components';

import { AlignProps } from './types';

type ContainerTitleProps = {
    $align: AlignProps;
    $debug?: boolean;
};

export const StyledContainerTitle = styled.div<ContainerTitleProps>`
    display: flex;
    width: 100%;
    border: ${({ theme : { colors }, $debug }) => ($debug ? `1px solid ${colors.debugBorder}` : 'none')};
    background-color: ${({ theme : { colors }, $debug }) => ($debug ? colors.debugBackground : 'transparent')};
    justify-content: ${({ $align }) => $align};
    align-items: center;

    & h6 {
        font-weight: 500;
        color: ${({ theme : { colors } }) => colors.text};
    }
`;
