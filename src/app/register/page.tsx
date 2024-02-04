'use client';

import React, { FC, useState } from 'react';

import Logo from '@/components/ImageWrapper';
import translationsLogo from '@/components/ImageWrapper/translations.constants';
import Title from '@/components/Register/Title';
import translationsTitle from '@/components/Register/Title/translations.constants';
import Step from '@/components/Step';
import translationsStep from '@/components/Step/translations.constants';
import { TranslationKeys } from '@/components/Step/types';

import { useTranslateContext } from '@/hooks/useTranslate';

import { StyledContainerRegister, StyledContentSteps } from '@/styles/pages/register';

import ImagesConstants from '@/constants/images.constants';

const Register: FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const { translate } = useTranslateContext();

  const translationTitle = translate(translationsTitle);
  const translationLogo = translate(translationsLogo);
  const translationStep = translate(translationsStep);

  const getTranslationKey = (step: number) => translationStep[`descriptionStep${step}` as keyof TranslationKeys];

  const changeStep = (changeStep: number) => setActiveStep(changeStep);

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
        <StyledContentSteps>
          {
            [1, 2, 3, 4].map((step) => (
              <Step
                key={step}
                changeStep={changeStep}
                activeStep={activeStep}
                completeStep
                lastStep={step === 4}
                message={translationStep.messageWarning}
                descriptionStep={getTranslationKey(step)}
                step={step}
              />
            ))
          }
        </StyledContentSteps>
      </StyledContainerRegister>
    </section>
  );
};

export default Register;
