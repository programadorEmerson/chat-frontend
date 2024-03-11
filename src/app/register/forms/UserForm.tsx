import React, { Fragment } from 'react';

import { FormikProps } from 'formik';

import { UserForm as User } from '@/components/register';

import { CompanyRegister } from '@/interfaces/company.interface';

import { StyledContentInputs } from '@/styles/pages/register';

interface UserFormProps<T extends CompanyRegister> {
    formik: FormikProps<T>
    loading: boolean;
    step: number;
  }

const UserForm = <T extends CompanyRegister>({ formik, loading, step }: UserFormProps<T>): JSX.Element => {
  return (
    <Fragment>
      {step === 2 && (
        <StyledContentInputs>
          <User
            formik={formik}
            loading={loading}
          />
        </StyledContentInputs>
      )}
    </Fragment>
  );
};

export default UserForm;
