import sw from 'tailwind-styled-components';

export const ContainerButton = sw.div`
    border
    text-gray-900
    text-sm 
    rounded-r-lg
    focus:border-blue-500
    block w-10 p-2.5
    bg-gray-50
    border-gray-600
    placeholder-gray-400
    text-gray-600
    focus:ring-blue-500
    focus:border-blue-500 h-12
`;

export const ButtonShowPassword = sw.button`
    text-lg h-full 
    w-full justify-center
    focus:outline-none flex items-center
    transition-all duration-300
    text-gray-600 dark:text-gray-400
    hover:text-gray-900 dark:hover:text-gray-800
`;

export const InputText = sw.input<{isfildpassword: string}>`
    border
    h-12
    bg-gray-100
    text-gray-600
    bold
    bg-slate-50
    text-sm ${({ isfildpassword }) => isfildpassword === 'true'
    ? 'rounded-l-lg'
    : 'rounded-lg'}
    block
    w-full
    p-2.5
    border-gray-600
    placeholder-gray-400
    focus:ring-blue-500
    focus:border-blue-500
`;
