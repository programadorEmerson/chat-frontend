'use client';

import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import { ApiService } from '@/services/api';
import Websocket from '@/services/websocket';

import { useUserContext } from '@/hooks/useUser';

export interface WebsocketProps {
  socketIo: Websocket | null;
}

const WebsocketContext = createContext({} as WebsocketProps);

function WebsocketProvider({ children }: { children: ReactNode }) {
  const [socketIo, setSocketIo] = useState<Websocket | null>(null);
  const { user } = useUserContext();

  useEffect(() => {
    // if (user) {
    const api = new ApiService();
    const token = api.getApiToken();
    setSocketIo(new Websocket({ user, token }));
    // }
  }, [user]);

  const shared = useMemo(() => ({
    socketIo
  }), [socketIo]);

  return <WebsocketContext.Provider value={shared}>{children}</WebsocketContext.Provider>;
}

export { WebsocketContext, WebsocketProvider };
