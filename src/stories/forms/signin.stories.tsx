import React from 'react';
import { ToastContainer } from 'react-toastify';

import { InputTextProps } from '@/components/Input/Text';

import { UserProvider } from '@/contexts/user.context';

import { SignInInterface } from '@/interfaces/signin.interface';

import Login from '@/app/login/page';
import { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';

import { signinError } from '../../../__mocks__/signin.error';
import { signinSuccess } from '../../../__mocks__/signin.sucess';

export default {
  title : 'Forms/Signin',
  component : Login,
  parameters : {
    msw : {
      handlers : [
        rest.post(`${String(process.env.NEXT_PUBLIC_API_URL)}/users/signin`, (req, res, ctx) => {
          const { email } = req.body as SignInInterface;
          if (email === signinSuccess.userInfo.email) {
            return res(ctx.status(200), ctx.json(signinSuccess));
          }
          return res(ctx.status(400), ctx.json(signinError));
        })
      ]
    },
  },
  decorators : [
    (Story) => (
      <UserProvider>
        <ToastContainer />
        {Story()}
      </UserProvider>
    )
  ],
} as Meta;

export const Signin: StoryObj<InputTextProps<SignInInterface>> = {};
