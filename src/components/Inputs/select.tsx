'use client';

import React, { useState } from 'react';

import { FormikProps } from 'formik';

import { StyledFieldSetSelect } from './styles.text';

interface InputSelectProps<T> {
    width: number;
    formik: FormikProps<T>
    name: string;
    placeholder: string;
    disabled: boolean;
    valuesList: {key: string, value: string}[];
    getValue: (reference: string) => string;
    handleValue: <T>(reference: string, value: T) => void;
    containsError: (reference: string) => { errorMessage: string; containsError: boolean }
}

const InputSelect: <T>(props: InputSelectProps<T>) => JSX.Element = (props): JSX.Element => {
  const [focus, setFocus] = useState(false);

  const { placeholder, disabled, getValue } = props;

  const { containsError, errorMessage } = props.containsError(props.name);

  const toggleFocus = () => setFocus(!focus);

  return (
    <StyledFieldSetSelect
      $containsError={containsError}
      $containsValue={(getValue(props.name).length > 0)}
      $focus={focus}
      width={Number(props.width)}
    >
      <select
        name={props.name}
        disabled={disabled}
        onFocus={toggleFocus}
        value={getValue(props.name)}
        onChange={(e) => props.handleValue(props.name, e.target.value)}
        onBlur={(e) => { props.formik.handleBlur(e); setFocus(false); }}
      >
        <option
          value='select'
          defaultValue="Selecione"
        >
          Selecione
        </option>
        {
          props.valuesList.map((item) => (
            <option
              key={item.key}
              value={item.key}>
              {item.value}
            </option>
          ))
        }
      </select>
      <label htmlFor={props.name}>{placeholder}</label>
      {containsError && <span>{errorMessage}</span>}
    </StyledFieldSetSelect>
  );
};

export default InputSelect;
