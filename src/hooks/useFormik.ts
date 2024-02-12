
import { useState } from 'react';

import { useFormik as libFormik, FormikValues } from 'formik';

import * as yup from 'yup';

type CheckKeyExistsAndReturnValueType = { reference: string; onlyCheck: boolean };

type UseFormikType<T extends FormikValues> = {
  initialValues: T;
  validationSchema: yup.ObjectSchema<object, T, object, ''>;
  callApi: (path: string, values?: T) => Promise<void>;
};

const useFormik = <T extends FormikValues>({ initialValues, validationSchema, callApi }: UseFormikType<T>) => {
  const [loading, setLoading] = useState(false);

  const formik = libFormik<T>({
    initialValues,
    validationSchema,
    enableReinitialize : true,
    onSubmit : async (values) => {
      setLoading(true);
      await callApi('/api/submit', values);
      setLoading(false);
    },
  });

  const checksKeyExistsAndReturnValue = ({ reference, onlyCheck }: CheckKeyExistsAndReturnValueType ) => {
    const errorMessage = `The reference "${reference}" does not exist in the formik values`;

    const value = reference.split('.').reduce((acc, key) => {
      if (!(key in acc)) throw new Error(errorMessage);
      return acc[key];
    }, formik.values);

    return onlyCheck ? true : value;
  };

  const containsError = (reference: string) => {
    if (checksKeyExistsAndReturnValue({ reference, onlyCheck : true })) {
      const pathParts = reference.trim().split('.');

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const hasTouched: boolean = pathParts.reduce((acc: any, key: string) => {
        if (acc === undefined) return false;
        return acc[key];
      }, formik.touched) || false;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const hasMessage: string = pathParts.reduce((acc: any, key: string) => {
        if (acc === undefined) return false;
        return acc[key];
      }, formik.errors) || '';

      return {
        errorMessage : hasTouched ? hasMessage : '',
        containsError : (hasTouched && hasMessage !== '')
      };
    }

    return {
      errorMessage : '',
      containsError : false
    };
  };

  const handleValue = <T>(reference: string, value: T) => {
    if (checksKeyExistsAndReturnValue({ reference, onlyCheck : true })) {
      formik.setFieldValue(reference, value);
    }
  };

  const getValue = (reference: string): string => {
    return checksKeyExistsAndReturnValue({ reference, onlyCheck : false }) as unknown as string;
  };

  return { formik, loading, containsError, handleValue, getValue };
};

export default useFormik;
