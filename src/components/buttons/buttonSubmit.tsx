import React, { ButtonHTMLAttributes } from 'react';

import { FormikProps } from 'formik';

import { twMerge } from 'tailwind-merge';

interface ButtonSubmitProps<T> extends ButtonHTMLAttributes<HTMLButtonElement> {
    formik: FormikProps<T>
}

const ButtonSubmit: <T>(props: ButtonSubmitProps<T>) => JSX.Element = (props) => {
  const { formik : { errors, values, touched } } = props;
  const disabled = Object.keys(errors).length > 0;
  const keysValidate = Object.keys(values as object);
  const keysTouched = Object.keys(touched as object);
  const allTouch = keysValidate.every((key) => keysTouched.includes(key));

  return (
    <button
      {...props}
      type="submit"
      className={twMerge(`transition-all duration-300
      w-full inline-flex justify-center bg-blue-500 
      hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
      ${(allTouch && disabled) ? 'opacity-50 cursor-not-allowed' : ''}
    `, props.className)}
    />
  );
};

export default ButtonSubmit;
