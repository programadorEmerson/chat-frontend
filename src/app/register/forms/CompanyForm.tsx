import React, { FC } from 'react';

import { FormikProps } from 'formik';

import { CompanyForm as Company } from '@/components/register';

import { CompanyRegister } from '@/interfaces/company.interface';

import { StyledContentInputs } from '@/styles/pages/register';

interface CompanyFormProps {
    formik: FormikProps<CompanyRegister>
    loading: boolean;
    step: number;
  }

const CompanyForm: FC<CompanyFormProps> = ({ formik, loading, step }) => {
  return (
    <>
      {
        step === 1 && (
          <StyledContentInputs>
            <Company
              formik={formik}
              loading={loading}
            />
          </StyledContentInputs>
        )
      }
    </>
  );
};

export default CompanyForm;
