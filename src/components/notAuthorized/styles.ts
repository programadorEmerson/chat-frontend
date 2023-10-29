import Image from 'next/image';

import sw from 'tailwind-styled-components';

const Container = sw.section`
    flex
    flex-col
    w-full
    justify-center
    items-center
    gap-3
`;

const ImageNotAuthorized = sw(Image)`
    object-contain
    w-2/5
    p-10 md:p-5
`;

export const Authorize = {
  Container,
  ImageNotAuthorized
};
