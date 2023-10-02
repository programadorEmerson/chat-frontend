import React, { ButtonHTMLAttributes } from 'react';

import { FormikProps } from 'formik';

import notify from '@/utils/notify';

import { twMerge } from 'tailwind-merge';

import 'react-toastify/dist/ReactToastify.css';
interface ButtonSubmitProps<T> extends ButtonHTMLAttributes<HTMLButtonElement> {
    formik: FormikProps<T>
}

const ButtonSubmit: <T>(props: ButtonSubmitProps<T>) => JSX.Element = (props) => {
  const { formik : { errors, values, touched } } = props;
  const disabled = Object.keys(errors).length > 0;
  const keysValidate = Object.keys(values as object);
  const keysTouched = Object.keys(touched as object);
  const allTouch = keysValidate.every((key) => keysTouched.includes(key));

  const notifyError = () => {
    if (disabled) {
      Object.values(errors).forEach((error) =>
        notify({ type : 'error', message : error as string, toastId : 'error' }));
    }
  };

  return (
    <>
      <button
        {...props}
        type={(allTouch && disabled) ? 'button' : 'submit'}
        onClick={notifyError}
        className={twMerge(`transition-all duration-300
        w-full inline-flex justify-center bg-blue-500 
        hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
        ${(allTouch && disabled) ? 'opacity-50 cursor-not-allowed' : ''}
      `, props.className)}
      />
    </>
  );
};

export default ButtonSubmit;
