import React from 'react';
import ReactPasswordChecklist from 'react-password-checklist';

import { FormikProps } from 'formik';

import { UserValuesProps } from '@/app/register/formik.values';

import { StyledContainerPasswordChecklist } from './styles.checklist';

interface ChecklistProps<T> {
    formik: FormikProps<T>
    $focusInPassword: boolean;
}

const PasswordChecklist: <T, >(props: ChecklistProps<T>) =>
JSX.Element = <T,>({ formik, $focusInPassword }: ChecklistProps<T>): JSX.Element => {
  const { user } = formik.values as UserValuesProps;
  return (
    <StyledContainerPasswordChecklist $focusInPassword={$focusInPassword}>
      <ReactPasswordChecklist
        rules={['minLength','specialChar','number','capital','match']}
        minLength={8}
        value={user.password}
        valueAgain={user.confirmPassword}
        messages={{
          minLength : 'A senha deve ter pelo menos 5 caracteres',
          specialChar : 'A senha deve conter um caractere especial',
          number : 'A senha deve conter um número',
          capital : 'A senha deve conter uma letra maiúscula',
          match : 'As senhas devem ser iguais'
        }}
      />
    </StyledContainerPasswordChecklist>
  );
};

export default PasswordChecklist;
