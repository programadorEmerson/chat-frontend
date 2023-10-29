import { HTMLAttributes } from 'react';

import sw from 'tailwind-styled-components';

type StyledContainerProps = { statusMenu: 'show' | 'hide' }

interface ButtonProps extends
    HTMLAttributes<HTMLButtonElement>, Partial<StyledContainerProps> {}

const Container = sw.header`
    flex
    pb-2 pt-3
    w-full
`;

const AppName = sw.section<StyledContainerProps>`
    duration-500
    font-medium
    group-hover:text-slate-800
    left-24
    ml-3
    text-bluelogo
    text-md
    ${({ statusMenu }) => statusMenu !== 'show' && 'opacity-0 text-[0]'}
`;

const ContainerAppName = sw.section<StyledContainerProps>`
    content-center
    duration-200
    flex
    items-center
    justify-center
    w-9/12
    ${({ statusMenu }) => statusMenu !== 'show' && '-ml-8 opacity-0'}
`;

const ContentMenuIcon = sw.section<StyledContainerProps>`
    duration-500
    flex
    justify-center content-center
    ${({ statusMenu }) => statusMenu === 'show' ? 'w-3/12 mr-1.5' : 'w-full'}
`;

const ButtonMenu = sw.button<ButtonProps>`
    duration-500
    ease-in-out
    focus:outline-none
    inline-flex
    items-center
    rounded-lg p-1.5
    text-gray-400
    transition
    -ml-[0.15rem]
    ${({ statusMenu }) => statusMenu === 'hide'
    ? 'border border-gray-400 hover:bg-gray-200 hover:border-gray-50 hover:text-gray-600'
    : 'mt-[0.10rem]'}  
`;

export const Header = {
  Container,
  ContainerAppName,
  ContentMenuIcon,
  AppName,
  ButtonMenu,
};
