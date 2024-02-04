import sw from 'tailwind-styled-components';

const Container = sw.section`
    w-full
    inline-flex
    flex-col
`;

const ContentInput = sw.section`
    w-full
    inline-flex
    h-15
`;

const TextError = sw.small`
    text-red-500
    ml-2
`;

const ContainerButton = sw.div`
    border
    text-gray-900
    text-sm 
    rounded-r-lg
    focus:border-bluelogo
    block w-10 p-2.5
    bg-gray-50
    border-gray-600
    placeholder-gray-400
    text-gray-600
    focus:ring-bluelogo
    focus:border-bluelogo h-12
`;

const ButtonShowPassword = sw.button`
    text-lg h-full 
    w-full justify-center
    focus:outline-none flex items-center
    transition-all duration-300
    text-gray-600 dark:text-gray-400
    hover:text-gray-900 dark:hover:text-gray-800
`;

const InputText = sw.input<{isfildpassword: string}>`
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
    focus:ring-bluelogo
    focus:border-bluelogo
`;

export const Inputs = {
  ContainerButton,
  ButtonShowPassword,
  ContentInput,
  Container,
  InputText,
  TextError,
};
