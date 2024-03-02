import { debugMode } from '@/styles/shared.style';

import styled from 'styled-components';

type StepProps = {
    $debug?: boolean;
    $active: boolean;
    $lastStep: boolean;
};

const StyledStep = styled.section<StepProps>`
    display: flex;
    width: ${({ $lastStep }) => ($lastStep ? 'auto' : '20%')};
    align-items: center;
    justify-content: flex-start;
    padding: 0.1rem;
    ${debugMode}

    & > button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.3rem;
        width: 1.7rem;
        height: 1.7rem;
        border-radius: 50%;
        transition: opacity 0.3s;
        margin-right: 0.2rem;
        margin-left: 0.6rem;
        border: ${({ theme : { colors }, $active }) => ($active ? colors.warning : colors.primary)};
        background-color: ${({ theme : { colors }, $active }) => ($active ? colors.warning : colors.primary)};
        transition: background-color 0.5s;
        ${debugMode}
        
        &:hover {
            opacity: 0.8;
        }
        
        & > span {
            color: ${({ theme : { colors } }) => colors.white};
            ${debugMode}
        }
    }

    & > span {
        color: ${({ theme : { colors } }) => colors.text};
        font-weight: 500;
        font-size: ${({ theme : { fontSizes } }) => fontSizes.small};
        text-transform: uppercase;
        ${debugMode}

        & > svg {
            color: ${({ theme : { colors } }) => colors.text};
            font-size: ${({ theme : { fontSizes } }) => fontSizes.medium};
            margin-left: 0.3rem;
        }
    }

    & > hr {
        width: 100%;
        flex: 1;
        margin-left: 0.3rem;
        height: 0.1rem;
        border: 1px solid ${({ theme : { colors } }) => colors.primary};
        border-style: dashed;
        ${debugMode}
    }
`;

export default StyledStep;
