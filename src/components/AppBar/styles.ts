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
    ${({ status }) => (status === 'opened' ? 'w-56' : 'w-16')}
    bg-gray-800
    items-start
    justify-center
    absolute
    top-0
    left-0
    h-[calc(100vh-3.5rem)]
    mt-14
    h-min-screen
    rounded-tr-md
    transition-all
    pt-0
`;
