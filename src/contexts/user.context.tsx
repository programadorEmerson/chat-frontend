'use client';

import { createContext, ReactNode, useMemo, useState } from 'react';

import { destroyCookie, setCookie } from 'nookies';

import { ApiService } from '@/services/api';

import { RoutesRequestsEnum } from '@/enums/routes';

import { SignInInterface, SigninResponseInterface } from '@/interfaces/signin.interface';
import { UserInterface } from '@/interfaces/user.interface';

import { TOKEN_PREFIX, COOKIE_CONFIG } from '@/utils/tokens';

export interface UserContextProps {
  user: UserInterface | null;
  fetching: boolean;
  signIn: (credentials: SignInInterface) => Promise<void>;
}

const UserContext = createContext({} as UserContextProps);

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserInterface | null>(null);
  const [fetching, setFetching] = useState<boolean>(false);

  async function signIn(credentials: SignInInterface): Promise<void> {
    try {
      setFetching(true);
      const api = new ApiService();
      const { userInfo, accessToken } = await api.post<SigninResponseInterface, SignInInterface>
      (RoutesRequestsEnum.LOGIN, credentials);

      setUser(userInfo);
      setCookie(undefined, TOKEN_PREFIX, accessToken, { ...COOKIE_CONFIG });
    } catch (error) {
      destroyCookie(undefined, TOKEN_PREFIX);
      console.log('Login deu errado');
      console.log(error);
    } finally {
      setFetching(false);
    }
  }

  const shared = useMemo(() => ({
    user, signIn, fetching
  }), [user, signIn, fetching]);

  return <UserContext.Provider value={shared}>
    {children}
  </UserContext.Provider>;
}

export { UserContext, UserProvider };
