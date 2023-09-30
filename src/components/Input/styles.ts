import sw from 'tailwind-styled-components';

export const ContainerButton = sw.div`
    bg-gray-50
    border
    border-gray-300
    text-gray-900
    text-sm rounded-r-lg
    focus:ring-blue-500
    focus:border-blue-500
    block w-10 p-2.5
    dark:bg-gray-700
    dark:border-gray-600
    dark:placeholder-gray-400
    dark:text-white
    dark:focus:ring-blue-500
    dark:focus:border-blue-500 h-12
`;

export const ButtonShowPassword = sw.button`
    text-lg h-full
    w-full justify-center
    focus:outline-none flex items-center
    transition-all duration-300
    text-gray-600 dark:text-gray-400
    hover:text-gray-900 dark:hover:text-white
`;

export const InputText = sw.input<{isfildpassword: string}>`
    bg-gray-50
    border
    border-gray-300
    h-12
    text-gray-900
    text-sm ${({ isfildpassword }) => isfildpassword === 'true'
    ? 'rounded-l-lg'
    : 'rounded-lg'}
    focus:ring-blue-500
    focus:border-blue-500
    block
    w-full
    p-2.5
    dark:bg-gray-700
    dark:border-gray-600
    dark:placeholder-gray-400
    dark:text-white
    dark:focus:ring-blue-500
    dark:focus:border-blue-500
`;
