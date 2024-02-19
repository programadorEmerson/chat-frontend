import React, { FC, Fragment } from 'react';

import { FormikProps } from 'formik';

import { CompanyRegister } from '@/interfaces/company.interface';

import AddressForm from './address';
import GeneralForm from './general';

interface CompanyFormProps {
  formik: FormikProps<CompanyRegister>
  loading: boolean;
}

const CompanyForm: FC<CompanyFormProps> = (props) => {
  const { formik, loading } = props;

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
