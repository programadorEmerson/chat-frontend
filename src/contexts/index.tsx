'use client';

import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';

import theme from '@/styles/theme';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { AbilityProvider } from './ability.context';
import { TranslateProvider } from './translate.context';
import { UserProvider } from './user.context';
import { WebsocketProvider } from './websocket';

import 'react-toastify/dist/ReactToastify.css';

type Props = {
  children: React.ReactNode
}

const ContextsProvider: FC<Props> = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <UserProvider>
        <WebsocketProvider>
          <ToastContainer />
          <AbilityProvider>
            <TranslateProvider>
              {children}
            </TranslateProvider>
          </AbilityProvider>
        </WebsocketProvider>
      </UserProvider>
    </StyledThemeProvider>
  );
};

export default ContextsProvider;
