import { InfoEnum } from '@/enums/info.enum';
import MocksValues from '@/enums/mocks.enum';

export const signinSuccess = {
  statusCode : 200,
  ok : true,
  message : InfoEnum.SIGNIN_SUCCESS,
  accessToken : MocksValues.FAKE_TOKEN,
  userInfo : {
    id : 1,
    email : MocksValues.CORRECT_EMAIL,
    active : true
  }
};
