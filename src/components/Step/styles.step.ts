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
    border: ${({ theme : { colors }, $debug }) => ($debug ? `1px solid ${colors.debugBorder}` : 'none')};
    background-color: ${({ theme : { colors }, $debug }) => ($debug ? colors.debugBackground : 'transparent')};
    padding: 0.1rem;

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

        border: ${({ theme : { colors }, $debug, $active }) => ($debug
    ? `1px solid ${colors.debugBorder}`
    : $active ? colors.warning : colors.primary)
};
        background-color: ${({ theme : { colors }, $debug, $active }) => ($debug
    ? colors.debugBackground
    : $active ? colors.warning : colors.primary)
};
        
        &:hover {
            opacity: 0.8;
        }
        
        & > span {
            color: ${({ theme : { colors } }) => colors.white};
        }
    }

    & > span {
        color: ${({ theme : { colors } }) => colors.text};
        font-weight: 500;
        font-size: 0.9rem;
        text-transform: uppercase;
    }

    & > hr {
        width: 100%;
        flex: 1;
        margin-left: 0.3rem;
        height: 0.1rem;
        border: 1px solid ${({ theme : { colors } }) => colors.primary};
        border-style: dashed;
    }
`;

export default StyledStep;
