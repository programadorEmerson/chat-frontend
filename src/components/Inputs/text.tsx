'use client';

import React, { useState } from 'react';
import { BsEye as ShowPassIcon, BsEyeSlash as HidePassIcon } from 'react-icons/bs';

import { FormikProps } from 'formik';

import cepMask from '@/utils/cepMask';
import cpfCnpjMask from '@/utils/cpfCnpjMask';
import phoneMask from '@/utils/phoneMask';

import StyledFieldSet from './styles.text';

interface InputTextProps<T> {
    width: number;
    formik: FormikProps<T>
    name: string;
    placeholder: string;
    type: 'text' | 'password' | 'email' | 'number';
    disabled: boolean;
    getValue: (reference: string) => string;
    containsError: (reference: string) => { errorMessage: string; containsError: boolean }
    setFocusInPassword?: (value: boolean) => void;
}

const InputText: <T>(props: InputTextProps<T>) => JSX.Element = (props): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const [focus, setFocus] = useState(false);
  const { placeholder, type, disabled, getValue } = props;
  const isPasswordField = type === 'password';

  const { containsError, errorMessage } = props.containsError(props.name);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleFocus = () => {
    setFocus(!focus);
    if (props.setFocusInPassword) props.setFocusInPassword(!focus);
  };

  const verifyMask = (value: string): string => {
    if (/(\.|^)zip_code$/.test(props.name)) return cepMask(value);
    if (/(\.|^)document$/.test(props.name)) return cpfCnpjMask(value);
    if (/(\.|^)phone$/.test(props.name)) return phoneMask(value);
    return value;
  };

  return (
    <StyledFieldSet
      $containsError={containsError}
      $containsValue={(getValue(props.name).length > 0)}
      $focus={focus}
      width={Number(props.width)}
    >
      <input
        autoComplete='off'
        name={props.name}
        disabled={disabled}
        onFocus={toggleFocus}
        value={verifyMask(getValue(props.name))}
        onChange={props.formik.handleChange}
        onBlur={(e) => {
          props.formik.handleBlur(e);
          setFocus(false);
          if (props.setFocusInPassword) props.setFocusInPassword(false);
        }}
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
      {containsError && <span>{errorMessage}</span>}
    </StyledFieldSet>
  );
};

export default InputText;
