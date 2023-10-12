'use client';

import { createContext, FC, memo, ReactNode, useEffect, useMemo, useState } from 'react';

import { useRouter, usePathname } from 'next/navigation';

import { FormikProps, useFormik } from 'formik';

import { destroyCookie, parseCookies, setCookie } from 'nookies';

import { ApiService } from '@/services/api';

import { ConstantsEnum } from '@/enums/constants.enum';
import { ActionEnum, Rule, SubjectEnum } from '@/enums/featureCode.enum';
import { InfoEnum } from '@/enums/info.enum';
import { RoutesEnum, RoutesRequestsEnum } from '@/enums/routes';

import { initialValuesSignin, SignInInterface, SigninResponseInterface } from '@/interfaces/signin.interface';
import { UserInterface } from '@/interfaces/user.interface';

import notify from '@/utils/notify';
import notifyWithPromise from '@/utils/notifyPromise';
import { TOKEN_PREFIX, COOKIE_CONFIG } from '@/utils/tokens';
import validateToken from '@/utils/validateToken';

import schemaSignin from '@/schema/signin.schema';

const rulesFullClients:Rule[] = [
  {
    action : ActionEnum.READ,
    subject : SubjectEnum.CLIENTS
  },
  {
    action : ActionEnum.CREATE,
    subject : SubjectEnum.CLIENTS
  },
  {
    action : ActionEnum.UPDATE,
    subject : SubjectEnum.CLIENTS
  },
  {
    action : ActionEnum.DELETE,
    subject : SubjectEnum.CLIENTS
  }
];

export interface UserContextProps {
  user: UserInterface | null;
  fetching: boolean;
  formik: FormikProps<SignInInterface>;
  signIn: (credentials: SignInInterface) => Promise<void>;
  signOut: () => void;
}

const UserContext = createContext({} as UserContextProps);

const UserProvider: FC<{ children: ReactNode }> = memo(({ children }) => {
  const [user, setUser] = useState<UserInterface | null>(null);
  const [fetching, setFetching] = useState<boolean>(true);
  const { [TOKEN_PREFIX] : token } = parseCookies();

  function mockRulesUser(user: UserInterface): UserInterface {
    return {
      ...user,
      rules : rulesFullClients
    };
  }

  const router = useRouter();
  const pathname = usePathname();

  async function me(): Promise<void> {
    try {
      const api = new ApiService();
      const { userInfo } = await api.get<SigninResponseInterface>(RoutesRequestsEnum.ME);
      setUser(mockRulesUser(userInfo));
      if(pathname === RoutesEnum.LOGIN) router.push(RoutesEnum.DASHBOARD);
    } catch (error) {
      destroyCookie(undefined, TOKEN_PREFIX);
    } finally {
      setFetching(false);
    }
  }

  function signOut(): void {
    setUser(null);
    destroyCookie(undefined, TOKEN_PREFIX);
    router.push(RoutesEnum.LOGIN);
  }

  async function signIn(credentials: SignInInterface): Promise<void> {
    setFetching(true);
    notifyWithPromise({
      promise : new Promise((resolve, reject) => {
        const api = new ApiService();
        api.post<SigninResponseInterface, SignInInterface>(RoutesRequestsEnum.LOGIN, credentials)
          .then(({ userInfo, accessToken }) => {
            setUser(mockRulesUser(userInfo));
            setCookie(undefined, TOKEN_PREFIX, accessToken, { ...COOKIE_CONFIG });
            resolve(true);
            router.push(RoutesEnum.DASHBOARD);
          })
          .catch(error => {
            reject();
            const { response : { data : { message } } } = error;
            notify({ type : ConstantsEnum.ERROR, message, toastId : ConstantsEnum.SIGNIN_ERROR });
          }).finally(() => {
            setFetching(false);
          });
      }),
      pending : InfoEnum.REQUEST_SIGNIN,
    });
  }

  useEffect(() => {
    function verifyToken() {
      setFetching(true);
      if (token) {
        if (!validateToken(token)) {
          destroyCookie(undefined, TOKEN_PREFIX);
          setUser(null);
          setFetching(false);
        } else {
          me();
        }
      }
    }

    verifyToken();
  }, [token, pathname]);

  const formik = useFormik({
    enableReinitialize : true,
    validationSchema : schemaSignin,
    initialValues : initialValuesSignin,
    onSubmit : async (values) => {
      await signIn(values);
    }
  });

  const shared = useMemo(() => ({
    user, signIn, fetching, formik, signOut
  }), [user, signIn, fetching, formik, signOut]);

  return(
    <UserContext.Provider value={shared}>
      {children}
    </UserContext.Provider>
  );
});

UserProvider.displayName = 'UserProvider';

export { UserContext, UserProvider };
