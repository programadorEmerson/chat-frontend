import { useContext } from 'react';

import { WebsocketContext, WebsocketProps } from '@/contexts/websocket';

export const useWebsocketContext = (): WebsocketProps => useContext(WebsocketContext);
