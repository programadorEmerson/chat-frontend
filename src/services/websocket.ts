import { Dispatch, SetStateAction } from 'react';

import { io } from 'socket.io-client';

import { ApiService } from './api';
import { ConstantsEnum } from '@/enums/constants.enum';

interface WebsocketInterface {
  setUsersOnline: Dispatch<SetStateAction<number>>;
}

class Websocket {
  private dataShared: WebsocketInterface;

  constructor(
    dataShared: WebsocketInterface,

    private connection = io(`${process.env.NEXT_PUBLIC_API_URL}`, {
      transports: ['websocket'],
    }),
  ) {
    this.dataShared = dataShared;
    this.initializeOnSocket();
  }

  public testWebSocket = () => {
    const api = new ApiService();
    this.connection.emit(ConstantsEnum.CHECK_CHECK, {message: 'enviado'}, {
      Headers: { Authorization: `Bearer ${api.getApiToken()}` },
    });
  };

  private onUsersOnline = () => {
    const refOn = ConstantsEnum.USERS_ONLINE;
    this.connection.on(refOn, ({ usersOnline }: { usersOnline: number }) => {
      const { setUsersOnline } = this.dataShared;
      console.log('usersOnline', usersOnline)
      setUsersOnline(usersOnline);
    });
  };

  private initializeOnSocket = () => {
    this.onUsersOnline();
    if (this.dataShared) { 
      // validar a chamada caso tenha algum valor a passar para o wws
      this.testWebSocket();
    }
  };
}

export default Websocket;
