
import { io } from 'socket.io-client';

import { ConstantsEnum } from '@/enums/constants.enum';

import { UserInterface } from '@/interfaces/user.interface';

interface WebsocketInterface {
  user: UserInterface | null;
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

  public newUserOnline = (user: UserInterface) => {
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

  private authenticatedEmitter = (user: UserInterface) => {
    this.newUserOnline(user);

    this.authenticatedListeners(user);
  };

  private authenticatedListeners = (_user: UserInterface) => {
    // console.log('user: ', user);
    // this.onUsersOnline();
  };

  private notAuthenticatedEmitter = () => {

    this.notAuthenticatedListeners();
  };

  private notAuthenticatedListeners = () => {};

  private initializeOnSocket = () => {
    const { user } = this.dataShared;
    if (user) {
      this.authenticatedEmitter(user);
    }
    this.notAuthenticatedEmitter();
  };
}

export default Websocket;
