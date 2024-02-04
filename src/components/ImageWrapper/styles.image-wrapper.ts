import styled from 'styled-components';

type ImageWrapperProps = {
    width: string;
    height: string;
    $debug?: boolean;
};

const StyledImageWrapper = styled.section<ImageWrapperProps>`
    overflow: hidden;
    width: ${({ width }) => `${width}px`};
    height: auto;   
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    padding: 0.5rem;
    border: ${({ theme : { colors }, $debug }) => ($debug ? `1px solid ${colors.debugBorder}` : 'none')};
    background-color: ${({ theme : { colors }, $debug }) => ($debug ? colors.debugBackground : 'transparent')};

    & img {
        transition: all 0.3s ease;
        width: 100%;
        height: auto;
        border: ${({ theme : { colors }, $debug }) => ($debug ? `1px solid ${colors.debugBorder}` : 'none')};
        background-color: ${({ theme : { colors }, $debug }) => ($debug ? colors.debugBackground : 'transparent')};    

        &:hover {
            opacity: 0.8;
        }
    }

    & span {
        font-weight: 700;
        color: ${({ theme : { colors } }) => colors.text};
        border: ${({ theme : { colors }, $debug }) => ($debug ? `1px solid ${colors.debugBorder}` : 'none')};
        background-color: ${({ theme : { colors }, $debug }) => ($debug ? colors.debugBackground : 'transparent')};
    }
`;

export default StyledImageWrapper;
