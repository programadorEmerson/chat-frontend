import React, { Fragment } from 'react';

import { FormikProps } from 'formik';

import useFormikChecks from '@/hooks/useFormikChecks';

import { CompanyRegister } from '@/interfaces/company.interface';

import { InputText } from '../Inputs';

interface GeneralForm<T extends CompanyRegister> {
  formik: FormikProps<T>;
  loading: boolean;
}

const GeneralForm = <T extends CompanyRegister>({ formik, loading }: GeneralForm<T>): JSX.Element => {
  const { containsError, getValue } = useFormikChecks({ formik });
  const document = getValue('company.document');
  const documentType = document.length <= 14 ? 'CPF' : 'CNPJ';
  const customPlaceholder = !document.length ? 'CPF ou CNPJ' : documentType;

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
        placeholder={customPlaceholder}
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
