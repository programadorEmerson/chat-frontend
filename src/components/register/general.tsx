import React, { FC, Fragment } from 'react';

import { FormikProps } from 'formik';

import useFormikChecks from '@/hooks/useFormikChecks';

import { CompanyRegister } from '@/interfaces/company.interface';

import { InputText } from '../Inputs';

interface GeneralForm {
  formik: FormikProps<CompanyRegister>;
  loading: boolean;
}

const GeneralForm: FC<GeneralForm> = ({ formik, loading }) => {
  const { containsError, getValue } = useFormikChecks({ formik });

  return (
    <Fragment>
      <InputText
        formik={formik}
        name='company.name'
        placeholder='Nome da empresa'
        type='text'
        disabled={loading}
        containsError={containsError}
        getValue={getValue}
        width={50}
      />
      <InputText
        formik={formik}
        name='company.document'
        placeholder='CPF ou CNPJ'
        type='text'
        disabled={loading}
        containsError={containsError}
        getValue={getValue}
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
        width={30}
      />
      <InputText
        formik={formik}
        name='company.phone'
        placeholder='Telefone'
        type='text'
        disabled={loading}
        containsError={containsError}
        getValue={getValue}
        width={17}
      />
    </Fragment>
  );
};

export default GeneralForm;
