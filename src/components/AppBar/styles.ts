import sw from 'tailwind-styled-components';

export const StyledAppBarContainer = sw('section')`
    bg-gray-800
    flex
    w-full
    items-center
    justify-center
    px-4
    py-2
    shadow
    fixed
    text-white
    absolute
`;

export const StyledContentAppAbar = sw('section')<{status: 'opened' | 'closed'}>`
    w-full
    flex
    justify-between
    items-center
    transition-all
`;

export const StyledContentMenu = sw('section')<{status: 'opened' | 'closed'}>`
    flex-col
    ${({ status }) => (status === 'opened' ? 'w-56' : 'w-15')}
    bg-gray-800
    items-start
    justify-center
    absolute
    top-0
    left-0
    h-[calc(100vh-4.2rem)]
    h-min-screen
    rounded-md
    pt-0
    mt-[3.3rem]
    transition-all
    duration-500 
    ease-in-out
`;
