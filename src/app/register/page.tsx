/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { FC, useState } from 'react';

import { useFormik } from 'formik';

import Logo from '@/components/ImageWrapper';
import { CompanyForm } from '@/components/register';
import Title from '@/components/Register/Title';
import Step from '@/components/Step';

import {
  StyledContainerInputs, StyledContainerRegister,
  StyledContentInputs, StyledContentSteps, StyledFooterActions, StyledSectionActions
} from '@/styles/pages/register';
import { StyledHr } from '@/styles/shared.style';

import ImagesConstants from '@/constants/images.constants';

import { getValidationSchema, initialValues } from './formik.values';

const steps = ['Dados da empresa', 'Dados de acesso', 'Monte seu pacote', 'Confirmar dados'];

const Register: FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema : getValidationSchema(activeStep),
    enableReinitialize : true,
    onSubmit : async (values) => {
      setLoading(true);
      console.log('values', values);
      setLoading(false);
    },
  });

  const changeStep = (changeStep: number) => setActiveStep(changeStep);

  return (
    <section className={'pl-0 mt-14 w-full min-h-[calc(100vh-3.5rem)]'}>
      <StyledContainerRegister
        onSubmit={formik.handleSubmit}
        onBlur={formik.handleBlur}>
        <Logo
          width={209}
          height={133}
          src={ImagesConstants.logo}
          alt="Imagem do logo da Simple System"
          description='Simple System'
        />
        <Title
          align='center'
          title="Simple System"
        />
        <StyledContentSteps>
          {
            steps.map((step, index) => (
              <Step
                key={index}
                changeStep={changeStep}
                activeStep={activeStep}
                completeStep
                lastStep={(index + 1) === 4}
                message="Preencha os campos obrigatórios"
                descriptionStep={step}
                step={index + 1}
              />
            ))
          }
        </StyledContentSteps>
        <StyledContainerInputs>
          <StyledContentInputs>
            <CompanyForm
              formik={formik}
              loading={loading}
            />
          </StyledContentInputs>
          <StyledHr />
          <StyledFooterActions>
            <StyledSectionActions align='left'>
              Anterior
            </StyledSectionActions>
            <StyledSectionActions align='right'>
              Próxima
            </StyledSectionActions>
          </StyledFooterActions>
        </StyledContainerInputs>
      </StyledContainerRegister>
    </section>
  );
};

export default Register;
