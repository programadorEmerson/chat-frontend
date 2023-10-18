import React, { FC } from 'react';

import Image from 'next/image';

import { ImagesEnum } from '@/enums/images.enum';

const NotAuthorized: FC = () => {
  return (
    <div className={'flex flex-col w-full justify-center items-center gap-3'}>
      <Image src={ImagesEnum.PEOPLE_NOT_AUTHORIZED}
        className='object-contain w-2/5 p-10 md:p-5'
        alt='login'
        width={1000}
        height={1000}
        priority
      />
      <span>
        ACESSO RESTRITO!
      </span>
      <p>
        Voce não possui permissão para acessar essa página.
      </p>
      <strong>
        Caso isso seja um erro, entre em contato com o administrador do sistema.
      </strong>
    </div>
  );
};

export default NotAuthorized;
