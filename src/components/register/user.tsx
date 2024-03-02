import React, { FC, Fragment } from 'react';

import { FormikProps } from 'formik';

import useFormikChecks from '@/hooks/useFormikChecks';

import { UserRegister } from '@/interfaces/company.interface';

import { StyledRowContainerWrapper } from '@/styles/shared.style';

import { InputImage, InputText } from '../Inputs';

interface UserForm {
  formik: FormikProps<UserRegister>;
  loading: boolean;
}

// "email": "emerson@saturnino.com.br",
// "password": "Emerson@2023",
// "name": "Emerson L Saturnino",
// "url_image": "https://avatars.githubusercontent.com/u/59292088?v=4",

const UserForm: FC<UserForm> = ({ formik, loading }) => {
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
        getValue={getValue}
        width={25}
      />
      <InputText
        formik={formik}
        name='user.confirmPassword'
        placeholder='Confirme a senha'
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
