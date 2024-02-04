'use client';

import React, { FC } from 'react';

import Logo from '@/components/ImageWrapper';
import translationsLogo from '@/components/ImageWrapper/translations.constants';
import Title from '@/components/Register/Title';
import translationsTitle from '@/components/Register/Title/translations.constants';

import { useTranslateContext } from '@/hooks/useTranslate';

import StyledContainerRegister from '@/styles/pages/register';

import ImagesConstants from '@/constants/images.constants';

const Register: FC = () => {
  const { translate } = useTranslateContext();

  const translationTitle = translate(translationsTitle);
  const translationLogo = translate(translationsLogo);

  return (
    <section className={'pl-0 mt-14 w-full min-h-[calc(100vh-3.5rem)]'}>
      <StyledContainerRegister>
        <Logo
          width={209}
          height={133}
          src={ImagesConstants.logo}
          alt={translationLogo.alt}
          description='Simple System'
        />
        <Title
          align='center'
          title={translationTitle.title}
        />
      </StyledContainerRegister>
    </section>
  );
};

export default Register;
