import React from 'react';

import { FormikProps } from 'formik';

import notify from '@/utils/notify';

import { Button } from './styles';

interface ButtonSubmitProps<T> extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    formik: FormikProps<T>
}

/**
 * ButtonSubmit - A button component tailored for form submissions.
 *
 * This button is aware of the Formik form state and adjusts its behavior
 * based on the validity of the form and whether all fields have been touched.
 *
 * @param formik - The Formik form props.
 * @param rest - Any additional button props.
 * @returns - A JSX button element.
 */
const ButtonSubmit = <T extends object>({ formik,...rest }: ButtonSubmitProps<T>): JSX.Element => {
  const { errors, values, touched } = formik;
  const disabled = Boolean(Object.keys(errors).length);

  const notifyError = () => {
    if (!disabled) return;
    Object.values(errors).forEach((error) =>
      notify({ type : 'error', message : String(error), toastId : 'error' }));
  };

  const allTouch = Object.keys(values).every((key) => key in touched);
  const statusButton = (allTouch && disabled) ? 'disabled' : 'enabled';
  const type = (allTouch && disabled) ? 'button' : 'submit';

  return (
    <Button.Submit
      {...rest}
      statusButton={statusButton}
      type={type}
      onClick={notifyError}
    />
  );
};

export default ButtonSubmit;
