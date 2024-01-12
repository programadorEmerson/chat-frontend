import { HTMLAttributes } from 'react';

import sw from 'tailwind-styled-components';

type StyledContainerProps = { statusmenu: 'show' | 'hide' }

interface ButtonProps extends
    HTMLAttributes<HTMLButtonElement>, Partial<StyledContainerProps> {}

const Container = sw.header`
    flex
    mt-[1.2rem]
    w-full
`;

const ContentMenuIcon = sw.section<StyledContainerProps>`
    duration-500
    flex
    justify-center
    ${({ statusmenu }) => statusmenu === 'show' ? 'justify-end w-11/12' : 'justify-center w-full'}
`;

const ButtonMenu = sw.button<ButtonProps>`
    duration-500
    ease-in-out
    focus:outline-none
    inline-flex
    items-center
    rounded-lg
    p-1.5
    text-gray-400
    transition
    border
    border-gray-400
    hover:bg-gray-200
    hover:border-gray-50
    hover:text-gray-600
`;

export const Header = {
  Container,
  ContentMenuIcon,
  ButtonMenu,
};
