/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { FC, memo, useEffect, useState } from 'react';

import { useFormik } from 'formik';

import SimpleButton from '@/components/buttons/SimpleButton';
import Logo from '@/components/ImageWrapper';
import Title from '@/components/Register/Title';

import {
  StyledContainerButtonActions, StyledContainerInputs,
  StyledContainerRegister, StyledFooterActions, StyledSectionActions
} from '@/styles/pages/register';
import { StyledHr } from '@/styles/shared.style';

import ImagesConstants from '@/constants/images.constants';

import { getValidationSchema, initialValues
} from './formik.values';
import CompanyForm from './forms/CompanyForm';
import DefinePackages from './forms/DefinePackages';
import UserForm from './forms/UserForm';
import Steps from './steps';

const steps = ['Dados da empresa', 'Dados de acesso', 'Monte seu pacote', 'Confirmar dados'];

const Register: FC = () => {
  const [activeStep, setActiveStep] = useState(2);
  const [loading, setLoading] = useState(false);

  function handleNavgateClick(clicked: number) {
    const containsErrorOrEvenStep = Object.keys(formik.errors).length > 0 || activeStep === clicked;
    const clickedOnPreviousStep = clicked < activeStep;

    if (!clickedOnPreviousStep && containsErrorOrEvenStep) return;

    const newStep = clicked > activeStep ? activeStep + 1 : activeStep - 1;
    setActiveStep(newStep);
  }

  const formik = useFormik({
    initialValues : initialValues,
    validationSchema : getValidationSchema(activeStep),
    enableReinitialize : true,
    onSubmit : (values) => {
      setLoading(false);
      console.log('values', values);
    },
  });

  useEffect(() => {
    if (activeStep === 2) setTimeout(() => formik.setTouched({}), 100);
  }, [activeStep]);

  useEffect(() => {
    console.log('saturnino', formik.values.user.fileImg);
  }, [formik.values]);

  return (
    <section className={'pl-0 mt-14 w-full min-h-[calc(100vh-3.5rem)]'}>
      <StyledContainerRegister
        onSubmit={formik.handleSubmit}
        onBlur={formik.handleBlur}
        autoComplete="off">

        <Logo
          width={209}
          height={133}
          src={ImagesConstants.logo}
          alt="Imagem do logo da Simple System"
          description='Simple System' />

        <Title
          align='center'
          title="Simplicidade que impulsiona resultados" />

        <Steps
          steps={steps}
          activeStep={activeStep}
          handleNavgateClick={handleNavgateClick} />

        <StyledContainerInputs>

          <div>
            <CompanyForm
              loading={loading}
              formik={formik}
              step={activeStep} />

            <UserForm
              formik={formik}
              loading={loading}
              step={activeStep} />

            <DefinePackages
              formik={formik}
              loading={loading}
              step={activeStep} />
          </div>

          <StyledFooterActions>
            <StyledHr />
            <StyledContainerButtonActions>
              <StyledSectionActions $align='left'>
                <SimpleButton
                  id='previous-button'
                  disabled={activeStep === 1}
                  aria-label='previous'
                  type='button'
                  onClick={() => handleNavgateClick(activeStep - 1)}
                >
                  Anterior
                </SimpleButton>
              </StyledSectionActions>
              <StyledSectionActions $align='right'>
                <SimpleButton
                  id='next-button'
                  type='submit'
                  aria-label={steps.length === activeStep ? 'save' : 'next'}
                  onClick={() => handleNavgateClick(activeStep + 1)}>
                  {steps.length === activeStep ? 'Salvar' : 'Avançar'}
                </SimpleButton>
              </StyledSectionActions>
            </StyledContainerButtonActions>
          </StyledFooterActions>
        </StyledContainerInputs>
      </StyledContainerRegister>
    </section>
  );
};

export default memo(Register);
