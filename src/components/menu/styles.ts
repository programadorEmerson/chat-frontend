import sw from 'tailwind-styled-components';

export const StyledContainer = sw.div<{visibility: 'show' | 'hide'}>`
    flex
    h-screen
    w-screen
    justify-center
    content-center 
    ${({ visibility }) => visibility
    ? 'animate-fadeIn duration-1000'
    : 'opacity-0'
}
`;
