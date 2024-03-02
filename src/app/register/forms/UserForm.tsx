import React, { FC } from 'react';

import { FormikProps } from 'formik';

import { UserForm as User } from '@/components/register';

import { CompanyRegister } from '@/interfaces/company.interface';

import { StyledContentInputs } from '@/styles/pages/register';

interface UserFormProps {
    formik: FormikProps<CompanyRegister>
    loading: boolean;
    step: number;
  }

const UserForm: FC<UserFormProps> = ({ formik, loading, step }) => {
  return (
    <>
      {
        step === 2 && (
          <StyledContentInputs>
            <User
              formik={formik}
              loading={loading}
            />
          </StyledContentInputs>
        )
      }
    </>
  );
};

export default UserForm;
