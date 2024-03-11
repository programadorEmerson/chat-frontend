import React, { Fragment } from 'react';

import { FormikProps } from 'formik';

import Cupon from '@/components/coupon';
import { DefinePackages as Packages } from '@/components/register';

import { CompanyRegister } from '@/interfaces/company.interface';

export interface DefinePackagesProps<T extends CompanyRegister> {
    formik: FormikProps<T>
    loading: boolean;
    step: number;
  }

const DefinePackages = <T extends CompanyRegister>({ formik, loading, step }: DefinePackagesProps<T>): JSX.Element => {
  return (
    <Fragment>
      {step === 3 && (
        <>
          <Cupon />
          <Packages
            formik={formik}
            loading={loading}
          />
        </>
      )}
    </Fragment>
  );
};

export default DefinePackages;
