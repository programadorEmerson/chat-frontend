'use client';

import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import { useRouter, usePathname } from 'next/navigation';

import { FormikProps, useFormik } from 'formik';

import { destroyCookie, parseCookies, setCookie } from 'nookies';

import jwtDecode from 'jwt-decode';

import { ApiService } from '@/services/api';

import { ConstantsEnum } from '@/enums/constants.enum';
import { InfoEnum } from '@/enums/info.enum';
import { RoutesEnum, RoutesRequestsEnum } from '@/enums/routes';

import { initialValuesSignin, SignInInterface, SigninResponseInterface } from '@/interfaces/signin.interface';
import TokenInterface from '@/interfaces/token.interface';
import { UserInterface } from '@/interfaces/user.interface';

import notify from '@/utils/notify';
import notifyWithPromise from '@/utils/notifyPromise';
import { TOKEN_PREFIX, COOKIE_CONFIG } from '@/utils/tokens';

import schemaSignin from '@/schema/signin.schema';

export interface UserContextProps {
  user: UserInterface | null;
  fetching: boolean;
  formik: FormikProps<SignInInterface>;
  signIn: (credentials: SignInInterface) => Promise<void>;
}

const UserContext = createContext({} as UserContextProps);

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserInterface | null>(null);
  const [fetching, setFetching] = useState<boolean>(true);
  const { [TOKEN_PREFIX] : token } = parseCookies();

  const router = useRouter();
  const pathname = usePathname();

  async function me(): Promise<void> {
    try {
      const api = new ApiService();
      const { userInfo } = await api.get<SigninResponseInterface>(RoutesRequestsEnum.ME);
      setUser(userInfo);
      if(pathname === RoutesEnum.LOGIN) router.push(RoutesEnum.DASHBOARD);
    } catch (error) {
      destroyCookie(undefined, TOKEN_PREFIX);
    } finally {
      setFetching(false);
    }
  }

  async function signIn(credentials: SignInInterface): Promise<void> {
    setFetching(true);
    notifyWithPromise({
      promise : new Promise((resolve, reject) => {
        const api = new ApiService();
        api.post<SigninResponseInterface, SignInInterface>(RoutesRequestsEnum.LOGIN, credentials)
          .then(({ userInfo, accessToken }) => {
            setUser(userInfo);
            setCookie(undefined, TOKEN_PREFIX, accessToken, { ...COOKIE_CONFIG });
            notify({
              type : ConstantsEnum.SUCCESS,
              message : InfoEnum.SIGNIN_SUCCESS,
              toastId : ConstantsEnum.SIGNIN_SUCCESS,
            });
            resolve({ userInfo, accessToken });
          })
          .catch(error => {
            reject();
            const { response : { data : { message } } } = error;
            notify({ type : ConstantsEnum.ERROR, message, toastId : ConstantsEnum.SIGNIN_ERROR });
            destroyCookie(undefined, TOKEN_PREFIX);
          }).finally(() => {
            setFetching(false);
          });
      }),
      pending : InfoEnum.REQUEST_SIGNIN,
    });
  }

  function validateToken(): void {
    setFetching(true);
    if (token) {
      const decoded = jwtDecode(token) as TokenInterface;
      if (!decoded || decoded.exp < Date.now() / 1000) {
        destroyCookie(undefined, TOKEN_PREFIX);
        setUser(null);
        setFetching(false);
      } else {
        me();
      }
    }
  }

  useEffect(() => validateToken(), [token]);

  const formik = useFormik({
    enableReinitialize : true,
    validationSchema : schemaSignin,
    initialValues : initialValuesSignin,
    onSubmit : async (values) => {
      await signIn(values);
    }
  });

  const shared = useMemo(() => ({
    user, signIn, fetching, formik
  }), [user, signIn, fetching, formik]);

  return <UserContext.Provider value={shared}>
    <div className={
      `
        flex h-screen w-screen justify-center content-center 
        ${!fetching ? 'animate-fadeIn duration-1000' : 'opacity-0'}
      `
    }
    >
      {children}
    </div>

  </UserContext.Provider>;
}

export { UserContext, UserProvider };
