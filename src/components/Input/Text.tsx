import React, { InputHTMLAttributes, useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

import { FormikProps } from 'formik';

import { ConstantsEnum } from '@/enums/constants.enum';

interface InputTextProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  formik: FormikProps<T>
  reference: keyof T & string
  type: 'text' | ConstantsEnum.PASSWORD
}

const Text: <T>(props: InputTextProps<T>) => JSX.Element = (props) => {
  const { type, formik : { errors, touched, values, handleChange }, reference } = props;
  const isFildPassword = type === ConstantsEnum.PASSWORD;
  const value = String(values[reference]);
  const containsError = errors[reference];
  const wasVisited = Boolean(touched[reference]);

  const [hidePassword, setHidePassword] = useState(isFildPassword);

  const showPassword: () => void = () => setHidePassword(!hidePassword);

  return (
    <div className='w-full inline-flex flex-col'>
      <div className='w-full inline-flex h-15'>
        <input
          {...props}
          id={reference}
          name={reference}
          value={value}
          onChange={handleChange}
          type={hidePassword ? 'password' : 'text'}
          className={`
          bg-gray-50 border border-gray-300 h-12
          text-gray-900 text-sm ${isFildPassword ? 'rounded-l-lg' : 'rounded-lg'}
          focus:ring-blue-500 focus:border-blue-500
          block w-full p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500
          dark:focus:border-blue-500`}
        />
        {isFildPassword && (
          <div className='
          bg-gray-50 border border-gray-300
          text-gray-900 text-sm rounded-r-lg
          focus:ring-blue-500 focus:border-blue-500
          block w-10 p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500
          dark:focus:border-blue-500 h-12'
          >
            <button type='button'
              className='text-lg h-full
              w-full inline-flex justify-center
              focus:outline-none flex items-center
              transition-all duration-300
              text-gray-600 dark:text-gray-400
              hover:text-gray-900 dark:hover:text-white
            '
              onClick={showPassword}
            >
              {hidePassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>)
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
