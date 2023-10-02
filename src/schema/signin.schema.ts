import * as yup from 'yup';

import { EnumErrors } from '@/enums/error.enum';

import { SignInInterface } from '@/interfaces/signin.interface';

const schemaSignin = yup.object<SignInInterface>({
  email : yup.string().email(EnumErrors.INVALID_EMAIL).required(EnumErrors.EMAIL_REQUIRED),
  password : yup.string().required(EnumErrors.PASSWORD_REQUIRED),
});

export default schemaSignin;
