import { HTMLAttributes } from 'react';

import sw from 'tailwind-styled-components';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    statusButton: 'enabled' | 'disabled';
}

export const Submit = sw.button<ButtonProps>`
    transition-all
    duration-300
    w-full
    inline-flex
    justify-center
    bg-bluelogo
    hover:bg-blue-700
    text-white
    font-bold
    py-2
    px-4
    rounded 
    ${({ statusButton }) =>
    statusButton !== 'enabled' && 'opacity-50 cursor-not-allowed'}
`;

export const Button = {
  Submit,
};
