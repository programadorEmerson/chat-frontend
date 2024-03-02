import React, { FC } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

import useIsMobile from '@/hooks/useDeviceType';

import StyledStep from './styles.step';

type StepProps = {
  step: number;
  activeStep: number;
  lastStep: boolean;
  descriptionStep: string;
  handleNavgateClick: (stepClicked: number) => void;
};

export const Step: FC<StepProps> = ({
  step, activeStep, lastStep, descriptionStep, handleNavgateClick,
}) => {
  const { isMobile } = useIsMobile();

  return (
    <StyledStep
      $active={activeStep === step}
      $lastStep={lastStep}
    >
      <button
        type={activeStep === step ? 'button' : 'submit'}
        id={`Step ${step}`}
        aria-label={`Step ${step}`}
        onClick={() => handleNavgateClick(step)}
      >
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
