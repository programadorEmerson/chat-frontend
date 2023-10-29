import Image from 'next/image';

import sw from 'tailwind-styled-components';

const ContainerLoading = sw.section`
    flex
    h-full
    items-center
    justify-center
    w-full
`;

const Loading = sw(Image)`
    md:p-5
    object-contain
    p-10
    w-52
`;

const UnauthorizedContainer = sw.section`
    content-center
    flex
    h-full
    justify-center
    w-full
`;

const AuthorizedContainer = sw(UnauthorizedContainer)`
    justify-start
`;

export const Styled ={
  Loading,
  ContainerLoading,
  AuthorizedContainer,
  UnauthorizedContainer,
};
