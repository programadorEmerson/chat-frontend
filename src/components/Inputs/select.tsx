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
    containsError: (reference: string) => { errorMessage: string; containsError: boolean }
}

const InputSelect: <T>(props: InputSelectProps<T>) => JSX.Element = (props): JSX.Element => {
  const [focus, setFocus] = useState(false);

  const { placeholder, disabled, getValue } = props;

  const { containsError, errorMessage } = props.containsError(props.name);

  const toggleFocus = () => setFocus(!focus);

  const removeDuplicatesIfExists = () => {
    const values = props.valuesList.map((item) => item.value);
    return Array.from(new Set(values)).map((value) => {
      const key = props.valuesList.find((item) => item.value === value)?.key;
      return { key, value };
    });
  };

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
        onChange={props.formik.handleChange}
        onBlur={(e) => { props.formik.handleBlur(e); setFocus(false); }}
      >
        {
          removeDuplicatesIfExists().map((item, index) => (
            <option
              key={index}
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
