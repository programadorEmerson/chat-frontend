import { RoutesEnum } from '@/enums/routes';

const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT;
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

const REF_SUFIX = ENVIRONMENT ? '-dev' : '';
const REF_PREFIX = `${APP_NAME}${REF_SUFIX}`;
export const keyCookieLanguage = `${REF_PREFIX}_language`;
const COOKIE_CONFIG = {
  maxAge : 60 * 60 * 12,
  path : RoutesEnum.INITIAL,
  secure : ENVIRONMENT !== 'development',
  sameSite : 'lax' as 'lax' | 'strict' | 'none'
};

export { REF_PREFIX, COOKIE_CONFIG, APP_NAME };
