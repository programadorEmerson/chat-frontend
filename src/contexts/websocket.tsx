"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';

import Websocket from '@/services/websocket';

export interface WebsocketProps {
  usersOnline: number;
  socketIo: Websocket | null;
  testWebSocket: () => void;
}

const WebsocketContext = createContext({} as WebsocketProps);

function WebsocketProvider({ children }: { children: ReactNode }) {
  const [usersOnline, setUsersOnline] = useState(0);
  const [socketIo, setSocketIo] = useState<Websocket | null>(null);

  const testWebSocket = () => {
    if (socketIo) {
      socketIo.testWebSocket();
    }
  };

  useEffect(() => {
    setSocketIo(
      new Websocket({ setUsersOnline }),
    );
  }, []);

  const shared = {
    testWebSocket,
    usersOnline,
    socketIo,
  };

  return (
    <WebsocketContext.Provider value={shared}>
      {children}
    </WebsocketContext.Provider>
  );
}

export { WebsocketContext, WebsocketProvider };
