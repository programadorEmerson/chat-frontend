import { NextRequest, NextResponse } from 'next/server';

import { RoutesEnum } from '@/enums/routes';

import { TOKEN_PREFIX } from '@/utils/tokens';

export const config = { matcher : [RoutesEnum.DASHBOARD,`${RoutesEnum.DASHBOARD}/:path*`] };

const extensions = ['.ico', '.png', '.svg', '.css', '.ts', '.tsx', '.js', '.json', '.local'];
const verifyExtension = (pathname: string) => extensions.some(ext => pathname.endsWith(ext));

export function middleware(request: NextRequest) {
  const { LOGIN, DASHBOARD, INITIAL } = RoutesEnum;
  const { pathname } = request.nextUrl;
  const { next, redirect } = NextResponse;

  if (!request.cookies.get(TOKEN_PREFIX)?.value && !verifyExtension(pathname)) {
    if (pathname === LOGIN || pathname === INITIAL) return next();
    return redirect(new URL(LOGIN, request.url));
  }

  if (pathname === LOGIN) redirect(new URL(DASHBOARD, request.url));
}
