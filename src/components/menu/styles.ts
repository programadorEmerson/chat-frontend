
import sw from 'tailwind-styled-components';

type StyledContainerProps = {
    visibility: 'show' | 'hide'
}

export const StyledContainer = sw.div<StyledContainerProps>`
    flex
    bg-gray-500
    h-screen
    w-screen
    justify-center
    content-center 
    ${({ visibility }) => visibility
    ? 'animate-fadeIn duration-1000'
    : 'opacity-0'
}
`;
