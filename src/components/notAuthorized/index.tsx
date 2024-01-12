import React, { FC } from 'react';

import { ImagesEnum } from '@/enums/images.enum';

import { Authorize } from './styles';

/**
 * NotAuthorized Component.
 *
 * This component is displayed when a user does not have the necessary permissions to access a specific page or resource.
 * It features an image indicating restricted access, and instructions on how to proceed in case of a potential error.
 *
 * @example
 * ```jsx
 * <NotAuthorized />
 * ```
 */
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
