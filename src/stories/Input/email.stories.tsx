/* eslint-disable jest/no-mocks-import */
import React from 'react';

import { useFormik } from 'formik';

import * as yup from 'yup';

import ButtonSubmit from '@/components/buttons/buttonSubmit';
import Text, { InputTextProps } from '@/components/Input/Text';

import { ConstantsEnum } from '@/enums/constants.enum';
import { EnumErrors } from '@/enums/error.enum';
import MocksValues from '@/enums/mocks.enum';
import { RoutesRequestsEnum } from '@/enums/routes';

import { SignInInterface } from '@/interfaces/signin.interface';

import { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';

import { signinError } from '../../../__mocks__/signin.error';
import { signinSuccess } from '../../../__mocks__/signin.sucess';

const validationSchema = yup.object({ [ConstantsEnum.EMAIL] : yup.string().required(EnumErrors.EMAIL_REQUIRED) });
const initialValues = { [ConstantsEnum.EMAIL] : MocksValues.CORRECT_EMAIL };

export default {
  title : 'Components/Input/Email',
  parameters : {
    msw : {
      handlers : [
        rest.post(RoutesRequestsEnum.LOGIN, (req, res, ctx) => {
          const { email } = req.body as SignInInterface;
          if (email === signinSuccess.userInfo.email) {
            return res(ctx.status(200), ctx.json(signinSuccess));
          }
          return res(ctx.json(signinError));
        })
      ]
    },
  },
  decorators : [
    () => {
      const formik = useFormik({
        enableReinitialize : true,
        validationSchema,
        initialValues,
        onSubmit : async (value) => console.log('success', value)
      });

      return (
        <div className='flex flex-col w-full justify-center content-center md:p-3'>
          <form
            onSubmit={formik.handleSubmit}
            className='w-full flex flex-col justify-center items-centerpx-10 gap-3'
          >
            <Text formik={formik}
              id={ConstantsEnum.EMAIL}
              type={ConstantsEnum.TEXT}
              reference={ConstantsEnum.EMAIL}
              placeholder={ConstantsEnum.EMAIL}
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

export const Email: StoryObj<InputTextProps<SignInInterface>> = {};
