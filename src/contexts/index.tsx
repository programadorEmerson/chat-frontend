import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';

import { AbilityProvider } from './ability.context';
import { UserProvider } from './user.context';
import { WebsocketProvider } from './websocket';

type Props = {
  children: React.ReactNode
}

const ContextsProvider: FC<Props> = ({ children }) => {
  return (
    <UserProvider>
      <WebsocketProvider>
        <ToastContainer />
        <AbilityProvider>
          {children}
        </AbilityProvider>
      </WebsocketProvider>
    </UserProvider>
  );
};

export default ContextsProvider;
