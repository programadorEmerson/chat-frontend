import { EnumErrors } from '@/enums/error.enum';

export const signinError = {
  statusCode : 400,
  message : EnumErrors.INVALID_EMAIL_OR_PASSWORD,
  error : 'Bad Request'
};
