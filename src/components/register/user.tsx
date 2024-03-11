import React, { Fragment, useState } from 'react';

import { FormikProps } from 'formik';

import useFormikChecks from '@/hooks/useFormikChecks';

import { CompanyRegister } from '@/interfaces/company.interface';

import { StyledRowContainerWrapper } from '@/styles/shared.style';

import { InputImage, InputText } from '../Inputs';
import PasswordChecklist from '../passwordChecklist';

interface UserForm<T extends CompanyRegister> {
  formik: FormikProps<T>;
  loading: boolean;
}

const UserForm = <T extends CompanyRegister>({ formik, loading }: UserForm<T>): JSX.Element => {
  const [focusInPassword, setFocusInPassword] = useState(false);
  const { containsError, getValue } = useFormikChecks({ formik });

  return (
    <Fragment>
      <StyledRowContainerWrapper>
        <InputImage
          formik={formik}
          name='user.url_image'
          type='file'
          disabled={loading}
        />
        <PasswordChecklist
          formik={formik}
          $focusInPassword={focusInPassword}
        />
      </StyledRowContainerWrapper>
      <InputText
        formik={formik}
        name='user.name'
        placeholder='Nome completo'
        type='text'
        disabled={loading}
        containsError={containsError}
        getValue={getValue}
        width={25}
      />
      <InputText
        formik={formik}
        name='user.email'
        placeholder='Email'
        type='email'
        disabled={loading}
        containsError={containsError}
        getValue={getValue}
        width={25}
      />
      <InputText
        formik={formik}
        name='user.password'
        placeholder='Senha'
        type='password'
        disabled={loading}
        containsError={containsError}
        setFocusInPassword={setFocusInPassword}
        getValue={getValue}
        width={25}
      />
      <InputText
        formik={formik}
        name='user.confirmPassword'
        placeholder='Confirme a senha'
        setFocusInPassword={setFocusInPassword}
        type='password'
        disabled={loading}
        containsError={containsError}
        getValue={getValue}
        width={25}
      />
    </Fragment>
  );
};

export default UserForm;
