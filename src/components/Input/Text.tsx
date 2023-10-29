import React, { InputHTMLAttributes, useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

import { FormikProps } from 'formik';

import { ConstantsEnum } from '@/enums/constants.enum';

import { Inputs } from './styles';

export interface InputTextProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  formik: FormikProps<T>
  reference: keyof T & string
  type: 'text' | ConstantsEnum.PASSWORD
}

/**
 * Props for the Text component.
 *
 * @template T - Type of the form values.
 * @extends {InputHTMLAttributes<HTMLInputElement>}
 */

/**
 * Text - A text input component that can also function as a password input.
 *
 * This component integrates with Formik for form management. It also provides a show/hide feature for password fields.
 *
 * @component
 * @example
 *   <Formik {...formikProps}>
 *     {(formik) => (
 *       <Text formik={formik} reference="passwordField" type={ConstantsEnum.PASSWORD} />
 *     )}
 *   </Formik>
 *
 * @returns {JSX.Element} Text component.
 */
const Text: <T>(props: InputTextProps<T>) => JSX.Element = (props): JSX.Element => {
  const { type, formik : { handleBlur, errors, touched, values, handleChange }, reference } = props;
  const isFildPassword = type === ConstantsEnum.PASSWORD;
  const value = String(values[reference]);
  const containsError = errors[reference];
  const wasVisited = Boolean(touched[reference]);

  const [hidePassword, setHidePassword] = useState(isFildPassword);

  const showPassword: () => void = () => setHidePassword(prev => !prev);

  return (
    <Inputs.Container>
      <Inputs.ContentInput>
        <Inputs.InputText
          {...props}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          isfildpassword={String(isFildPassword)}
          type={hidePassword ? 'password' : 'text'}
        />
        {isFildPassword && (
          <Inputs.ContainerButton>
            <Inputs.ButtonShowPassword
              onClick={showPassword}
              type='button'
            >
              {hidePassword ? <FaEyeSlash /> : <FaEye />}
            </Inputs.ButtonShowPassword>
          </Inputs.ContainerButton>)
        }
      </Inputs.ContentInput>
      {Boolean(containsError && wasVisited) && (
        <span className=''>
          <Inputs.TextError>
            {String(containsError)}
          </Inputs.TextError>
        </span>
      )}
    </Inputs.Container>
  );
};

export default Text;
