import { NextRequest, NextResponse } from 'next/server';

import { destroyCookie } from 'nookies';

import { RoutesEnum } from '@/enums/routes';

import { TOKEN_PREFIX } from '@/utils/tokens';

import validateToken from './utils/validateToken';

export const config = { matcher : ['/dashboard','/dashboard/:path*'] };

const extensions = ['.ico', '.png', '.svg', '.css', '.ts', '.tsx', '.js', '.json', '.local'];
const verifyExtension = (pathname: string) => extensions.some(ext => pathname.endsWith(ext));

export function middleware(request: NextRequest) {
  const { LOGIN, DASHBOARD, INITIAL } = RoutesEnum;
  const { pathname } = request.nextUrl;
  const { next, redirect } = NextResponse;

  const token = request.cookies.get(TOKEN_PREFIX)?.value;

  if (!token && !verifyExtension(pathname)) {
    if (pathname === LOGIN || pathname === INITIAL) return next();
    destroyCookie(undefined, TOKEN_PREFIX);
    return redirect(new URL(LOGIN, request.url));
  }

  if (token && !validateToken(token)) {
    destroyCookie(undefined, TOKEN_PREFIX);
    return redirect(new URL(LOGIN, request.url));
  }

  if (pathname === LOGIN) redirect(new URL(DASHBOARD, request.url));
}
