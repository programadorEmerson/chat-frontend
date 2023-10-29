import React, { FC } from 'react';

import { ImagesEnum } from '@/enums/images.enum';

import { Authorize } from './styles';

const NotAuthorized: FC = () => {
  return (
    <Authorize.Container>
      <Authorize.ImageNotAuthorized
        src={ImagesEnum.PEOPLE_NOT_AUTHORIZED}
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
    </Authorize.Container>
  );
};

export default NotAuthorized;
