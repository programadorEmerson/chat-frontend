import React, { Fragment } from 'react';

import { FormikProps } from 'formik';

import { CompanyRegister } from '@/interfaces/company.interface';

import AddressForm from './address';
import GeneralForm from './general';

interface CompanyFormProps<T extends CompanyRegister> {
  formik: FormikProps<T>
  loading: boolean;
}

const CompanyForm = <T extends CompanyRegister>({ formik, loading }: CompanyFormProps<T>): JSX.Element => {

  return (
    <Fragment>
      <GeneralForm
        loading={loading}
        formik={formik}
      />
      <AddressForm
        loading={loading}
        formik={formik}
      />
    </Fragment>
  );
};

export default CompanyForm;
