'use client';

import React, { useState } from 'react';
import { BsEye as ShowPassIcon, BsEyeSlash as HidePassIcon } from 'react-icons/bs';

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
  const [showPassword, setShowPassword] = useState(false);
  const [focus, setFocus] = useState(false);
  const { placeholder, type, disabled, getValue } = props;
  const isPasswordField = type === 'password';

  const { containsError, errorMessage } = props.containsError(props.name);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleFocus = () => setFocus(!focus);

  return (
    <StyledFieldSet
      $containsError={containsError}
      $containsValue={(getValue(props.name).length > 0)}
      $focus={focus}
    >
      <input
        name={props.name}
        disabled={disabled}
        onFocus={toggleFocus}
        value={getValue(props.name)}
        onChange={(e) => props.handleValue(props.name, e.target.value)}
        onBlur={(e) => { props.formik.handleBlur(e); setFocus(false); }}
        type={isPasswordField ? showPassword ? 'text' : 'password' : type}
      />
      {
        isPasswordField && (
          <button
            type='button'
            onClick={toggleShowPassword}
          >
            {showPassword ? <HidePassIcon /> : <ShowPassIcon />}
          </button>
        )
      }
      <label htmlFor={props.name}>{placeholder}</label>
      <span>{errorMessage}</span>
    </StyledFieldSet>
  );
};

export default InputText;
