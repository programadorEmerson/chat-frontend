import React from 'react';

import { useFormik } from 'formik';

import * as yup from 'yup';

import ButtonSubmit from '@/components/buttons/buttonSubmit';
import Text, { InputTextProps } from '@/components/Input/Text';

import { ConstantsEnum } from '@/enums/constants.enum';
import { EnumErrors } from '@/enums/error.enum';
import MocksValues from '@/enums/mocks.enum';

import { SignInInterface } from '@/interfaces/signin.interface';

import { Meta, StoryObj } from '@storybook/react';

const validationSchema = yup.object({ [ConstantsEnum.PASSWORD] : yup.string().required(EnumErrors.PASSWORD_REQUIRED) });
const initialValues = { [ConstantsEnum.PASSWORD] : MocksValues.CORRECT_PASSWORD };

export default {
  title : 'Components/Input/Password',
  decorators : [
    () => {
      const formik = useFormik({
        enableReinitialize : true,
        validationSchema,
        initialValues,
        onSubmit : async (value) => console.log('value', value)
      });

      return (
        <div className='flex flex-col w-full justify-center content-center md:p-3'>
          <form
            onSubmit={formik.handleSubmit}
            className='w-full flex flex-col justify-center items-centerpx-10 gap-3'
          >
            <Text formik={formik}
              id={ConstantsEnum.PASSWORD}
              type={ConstantsEnum.PASSWORD}
              reference={ConstantsEnum.PASSWORD}
              placeholder={ConstantsEnum.PLACEHOLDER_PASSWORD}
            />
            <ButtonSubmit formik={formik}>
              Testar Validação
            </ButtonSubmit>
          </form>
        </div>
      );
    }
  ],
} as Meta;

export const Password: StoryObj<InputTextProps<SignInInterface>> = {};
