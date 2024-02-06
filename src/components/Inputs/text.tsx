import React from 'react';

import { FormikProps } from 'formik';

import StyledFieldSet from './styles.text';

interface InputTextProps<T> {
    formik: FormikProps<T>
    name: string;
    placeholder: string;
    type: 'text' | 'password';
    disabled: boolean;
    getValue: (reference: string) => string;
    handleValue: <T>(reference: string, value: T) => void;
    containsError: (reference: string) => { errorMessage: string; containsError: boolean }
}

const InputText: <T>(props: InputTextProps<T>) => JSX.Element = (props): JSX.Element => {
  const { placeholder, type, disabled, getValue } = props;
  const isPasswordField = type === 'password';

  const { containsError, errorMessage } = props.containsError(props.name);

  return (
    <StyledFieldSet
      $containsError={containsError}
      $containsValue={(getValue(props.name).length > 0)}
    >
      <input
        name={props.name}
        type={isPasswordField ? 'password' : type}
        value={getValue(props.name)}
        disabled={disabled}
        onChange={(e) => props.handleValue(props.name, e.target.value)}
        onBlur={props.formik.handleBlur}
      />
      <label htmlFor={props.name}>{placeholder}</label>
      <span>{errorMessage}</span>
    </StyledFieldSet>
  );
};

export default InputText;
