import React, { FC } from 'react';

import Step from '@/components/Step';

import { StyledContentSteps } from '@/styles/pages/register';

type StepsProps = {
    steps: string[];
    activeStep: number;
    handleNavgateClick: (clicked: number) => void;

};

const Steps: FC<StepsProps> = ({ steps, activeStep, handleNavgateClick }) => {
  return (
    <StyledContentSteps>
      {
        steps.map((step, index) => (
          <Step
            key={index}
            activeStep={activeStep}
            lastStep={(index + 1) === 4}
            descriptionStep={step}
            step={index + 1}
            handleNavgateClick={handleNavgateClick}
          />
        ))
      }
    </StyledContentSteps>
  );
};

export default Steps;
