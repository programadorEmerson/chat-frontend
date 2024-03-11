/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps, FormikValues } from 'formik';

type UseFormikCheckProps<T extends FormikValues> = { formik: FormikProps<T> };
type CheckKeyExistsAndReturnValueType = { reference: string; onlyCheck: boolean };

const useFormikChecks = <T extends FormikValues>({ formik }: UseFormikCheckProps<T>) => {

  const checksKeyExistsAndReturnValue = ({ reference, onlyCheck }: CheckKeyExistsAndReturnValueType ) => {
    const errorMessage = `The reference "${reference}" does not exist in the formik values`;

    const value = reference.split('.').reduce((acc: any, key: string) => {
      try {
        if (!(key in acc)) throw new Error(errorMessage);
        return acc[key];
      } catch (error) {
        return '';
      }
    }, formik.values);

    return onlyCheck ? true : value;
  };

  const hasToutched = (reference: string) => {
    const pathParts = reference.trim().split('.');

    return pathParts.reduce((acc: any, key: string) => {
      if (acc === undefined) return false;
      return acc[key];
    }, formik.touched) || false;
  };

  const containsError = (reference: string) => {
    if (checksKeyExistsAndReturnValue({ reference, onlyCheck : true })) {
      const pathParts = reference.trim().split('.');

      const hasTouched: boolean = pathParts.reduce((acc: any, key: string) => {
        if (acc === undefined) return false;
        return acc[key];
      }, formik.touched) || false;

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

  const getValue = (reference: string): string => {
    return checksKeyExistsAndReturnValue({ reference, onlyCheck : false }) as unknown as string;
  };

  return { hasToutched, containsError, getValue };
};

export default useFormikChecks;
