
import { io } from 'socket.io-client';

import { ConstantsEnum } from '@/enums/constants.enum';

import { User } from '@/interfaces/user.interface';

interface WebsocketInterface {
  user: User | null;
  token: string;
}

class Websocket {
  private dataShared: WebsocketInterface;

  constructor(
    dataSocket: WebsocketInterface,

    private connection = io(`${process.env.NEXT_PUBLIC_API_URL}`, {
      transports : ['websocket'],
    }),
  ) {
    this.dataShared = dataSocket;
    this.initializeOnSocket();
  }

  public newUserOnline = (user: User) => {
    const { token } = this.dataShared;
    this.connection.emit(ConstantsEnum.NEW_USER_ONLINE,
      { id : user.id },
      { Headers : { Authorization : `Bearer ${token}` } },
    );
  };

  private onUsersOnline = () => {
    this.connection.on(ConstantsEnum.USERS_ONLINE, ({ usersOnline }: { usersOnline: number }) => {
      console.log('usersOnline front: ', usersOnline);
    });
  };

  private authenticatedEmitter = (user: User) => {
    this.newUserOnline(user);

    this.authenticatedListeners(user);
  };

  private authenticatedListeners = (_user: User) => {
    // console.log('user: ', user);
    // this.onUsersOnline();
  };

  private notAuthenticatedEmitter = () => {
    this.notAuthenticatedListeners();
  };

  private notAuthenticatedListeners = () => {
    this.connection.on('connection', () => {
      console.log('not authenticated');
    });
    this.connection.emit('connection',
      { id : 1 },
      { Headers : { Authorization : `Bearer ${'token'}` } },
    );
  };

  private initializeOnSocket = () => {
    const { user } = this.dataShared;
    if (user) {
      this.authenticatedEmitter(user);
    }
    this.notAuthenticatedEmitter();
  };
}

export default Websocket;
