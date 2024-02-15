import React, { FC } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { ConstantsEnum } from '@/enums/constants.enum';

import notify from '@/utils/notify';

import StyledStep from './styles.step';

type StepProps = {
  step: number;
  activeStep: number;
  isMobile: boolean;
  completeStep: boolean;
  message: string;
  lastStep: boolean;
  descriptionStep: string;
  changeStep: (changeStep: number) => void;
};

export const Step: FC<StepProps> = ({
  step, activeStep, isMobile, completeStep, message, lastStep, descriptionStep, changeStep,
}) => {
  const { WARNING : type } = ConstantsEnum;
  const toastId = String(step);

  return (
    <StyledStep
      $active={activeStep === step}
      $lastStep={lastStep}
    >
      <button
        type='button'
        aria-label={`Step ${step}`}
        onClick=
          {() => {
            if (activeStep === step) return;
            if (completeStep) return changeStep(step);
            notify({ type, message, toastId });
          }}>
        <span>
          {step}
        </span>
      </button>
      <span>
        {isMobile ? !lastStep && <HiArrowNarrowRight /> : descriptionStep}
      </span>
      {(!lastStep && !isMobile) && <hr />}
    </StyledStep>
  );
};
