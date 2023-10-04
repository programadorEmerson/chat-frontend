import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';

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
        {children}
      </WebsocketProvider>
    </UserProvider>
  );
};

export default ContextsProvider;
