'use client';

import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';

import theme from '@/styles/theme';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { AbilityProvider } from './ability.context';
import { LocalizationProvider } from './localization.context';
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
          <ToastContainer style={{ marginTop : '2.7rem', marginRight : '-1rem' }} />
          <AbilityProvider>
            <TranslateProvider>
              <LocalizationProvider>
                {children}
              </LocalizationProvider>
            </TranslateProvider>
          </AbilityProvider>
        </WebsocketProvider>
      </UserProvider>
    </StyledThemeProvider>
  );
};

export default ContextsProvider;
