import { UserInterface } from './user.interface';

const initialValuesSignin:SignInInterface  = {
  email : 'emerson@saturnino.com.br',
  password : 'Emerson@2023',
};

interface SignInInterface {
  email: string;
  password?: string;
}

interface SigninResponseInterface {
  statusCode: number,
  ok: boolean,
  accessToken: string;
  userInfo: UserInterface
}

export { type SignInInterface, type SigninResponseInterface, initialValuesSignin };
