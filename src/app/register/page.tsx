'use client';

import React, { FC, useState } from 'react';

import Logo from '@/components/ImageWrapper';
import translationsLogo from '@/components/ImageWrapper/translations.constants';
import { InputSelect, InputText } from '@/components/Inputs';
import Title from '@/components/Register/Title';
import translationsTitle from '@/components/Register/Title/translations.constants';
import Step from '@/components/Step';
import translationsStep from '@/components/Step/translations.constants';
import { TranslationKeys } from '@/components/Step/types';

import useFormik from '@/hooks/useFormik';
import { useTranslateContext } from '@/hooks/useTranslate';

import { RegisterUserInterface } from '@/interfaces/user.interface';

import {
  StyledContainerInputs, StyledContainerRegister,
  StyledContentInputs, StyledContentSteps, StyledFooterActions, StyledSectionActions
} from '@/styles/pages/register';
import { StyledHr } from '@/styles/shared.style';

import ImagesConstants from '@/constants/images.constants';

import { initialValues, validationSchema } from './formik.values';
import tanslationsFieldsRegister from './translate';

const Register: FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const { translate } = useTranslateContext();

  const callApi = async (path: string) => console.log(path);

  const translationTitle = translate(translationsTitle);
  const translationLogo = translate(translationsLogo);
  const translationStep = translate(translationsStep);
  const tanslationsRegister = translate(tanslationsFieldsRegister);

  const { formik, loading, containsError, getValue, handleValue } = useFormik<RegisterUserInterface>({
    initialValues, validationSchema : validationSchema({ translations : tanslationsRegister }), callApi
  });

  const getTranslationKey = (step: number) => translationStep[`descriptionStep${step}` as keyof TranslationKeys];

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
        <StyledContainerInputs>
          <StyledContentInputs>
            <InputText
              formik={formik}
              name='company.name'
              placeholder='Nome da empresa'
              type='text'
              disabled={loading}
              containsError={containsError}
              getValue={getValue}
              handleValue={handleValue}
              width={50}
            />
            <InputText
              formik={formik}
              name='company.document'
              placeholder='CPF/CNPJ'
              type='number'
              disabled={loading}
              containsError={containsError}
              getValue={getValue}
              handleValue={handleValue}
              width={20}
            />
            <InputText
              formik={formik}
              name='company.email'
              placeholder='Email'
              type='email'
              disabled={loading}
              containsError={containsError}
              getValue={getValue}
              handleValue={handleValue}
              width={30}
            />
            <InputText
              formik={formik}
              name='company.phone'
              placeholder='Telefone'
              type='email'
              disabled={loading}
              containsError={containsError}
              getValue={getValue}
              handleValue={handleValue}
              width={20}
            />
            <InputText
              formik={formik}
              name='company.address'
              placeholder='Endereço'
              type='text'
              disabled={loading}
              containsError={containsError}
              getValue={getValue}
              handleValue={handleValue}
              width={30}
            />
            <InputText
              formik={formik}
              name='company.zip_code'
              placeholder='CEP'
              type='text'
              disabled={loading}
              containsError={containsError}
              getValue={getValue}
              handleValue={handleValue}
              width={15}
            />
            <InputSelect
              formik={formik}
              name='company.state'
              placeholder='Estado'
              disabled={loading}
              containsError={containsError}
              getValue={getValue}
              handleValue={handleValue}
              valuesList={[
                {
                  key : 'SP', value : 'São Paulo'
                },
                {
                  key : 'RJ', value : 'Rio de Janeiro'
                },
              ]}
              width={13}
            />
            <InputSelect
              formik={formik}
              name='company.city'
              placeholder='Cidade'
              disabled={loading}
              containsError={containsError}
              getValue={getValue}
              handleValue={handleValue}
              valuesList={[
                {
                  key : 'VGS', value : 'Vargem Grande do Sul'
                },
                {
                  key : 'SP', value : 'São Paulo'
                },
              ]}
              width={21.7}
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
