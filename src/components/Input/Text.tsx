import React, { InputHTMLAttributes, useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

import { FormikProps } from 'formik';

import { ConstantsEnum } from '@/enums/constants.enum';

import { ButtonShowPassword, ContainerButton, InputText } from './styles';

export interface InputTextProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  formik: FormikProps<T>
  reference: keyof T & string
  type: 'text' | ConstantsEnum.PASSWORD
}

const Text: <T>(props: InputTextProps<T>) => JSX.Element = (props) => {
  const { type, formik : { handleBlur, errors, touched, values, handleChange }, reference } = props;
  const isFildPassword = type === ConstantsEnum.PASSWORD;
  const value = String(values[reference]);
  const containsError = errors[reference];
  const wasVisited = Boolean(touched[reference]);

  const [hidePassword, setHidePassword] = useState(isFildPassword);

  const showPassword: () => void = () => setHidePassword(!hidePassword);

  return (
    <div className='w-full inline-flex flex-col'>
      <div className='w-full inline-flex h-15'>
        <InputText
          {...props}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          isfildpassword={String(isFildPassword)}
          type={hidePassword ? 'password' : 'text'}
        />
        {isFildPassword && (
          <ContainerButton>
            <ButtonShowPassword
              onClick={showPassword}
              type='button'
            >
              {hidePassword ? <FaEyeSlash /> : <FaEye />}
            </ButtonShowPassword>
          </ContainerButton>)
        }
      </div>
      {Boolean(containsError && wasVisited) && (
        <span className=''>
          <small className='text-red-500 ml-2'>
            {String(containsError)}
          </small>
        </span>
      )}
    </div>
  );
};

export default Text;
