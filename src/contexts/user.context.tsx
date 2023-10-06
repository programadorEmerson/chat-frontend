'use client';

import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import { usePathname } from 'next/navigation';

import { FormikProps, useFormik } from 'formik';

import { destroyCookie, setCookie } from 'nookies';

import { ApiService } from '@/services/api';

import { ConstantsEnum } from '@/enums/constants.enum';
import { InfoEnum } from '@/enums/info.enum';
import { RoutesEnum, RoutesRequestsEnum } from '@/enums/routes';

import { initialValuesSignin, SignInInterface, SigninResponseInterface } from '@/interfaces/signin.interface';
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
  const [fetching, setFetching] = useState<boolean>(false);

  const path = usePathname();

  useEffect(() => {
    if (path === RoutesEnum.INITIAL && !user) {
      destroyCookie(undefined, TOKEN_PREFIX);
      setUser(null);
      window.location.href = RoutesEnum.LOGIN;
    }
  }, [path]);

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
    {children}
  </UserContext.Provider>;
}

export { UserContext, UserProvider };
