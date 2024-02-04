import React, { FC } from 'react';

import { ConstantsEnum } from '@/enums/constants.enum';

import notify from '@/utils/notify';

import StyledStep from './styles.step';

type StepProps = {
  step: number;
  activeStep: number;
  completeStep: boolean;
  message: string;
  lastStep: boolean;
  descriptionStep: string;
  changeStep: (changeStep: number) => void;
};

export const Step: FC<StepProps> = ({
  step, activeStep, completeStep, message, lastStep, descriptionStep, changeStep
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
        {descriptionStep}
      </span>
      {!lastStep && <hr />}
    </StyledStep>
  );
};
