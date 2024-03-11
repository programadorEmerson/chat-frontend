import React, { Fragment } from 'react';

import { FormikProps } from 'formik';

import { CompanyForm as Company } from '@/components/register';

import { CompanyRegister } from '@/interfaces/company.interface';

import { StyledContentInputs } from '@/styles/pages/register';

interface CompanyFormProps<T extends CompanyRegister> {
    formik: FormikProps<T>
    loading: boolean;
    step: number;
  }

const CompanyForm = <T extends CompanyRegister>({ formik, loading, step }: CompanyFormProps<T>): JSX.Element => {
  return (
    <Fragment>
      {step === 1 && (
        <StyledContentInputs>
          <Company
            formik={formik}
            loading={loading}
          />
        </StyledContentInputs>
      )}
    </Fragment>
  );
};

export default CompanyForm;
