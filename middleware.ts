import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n'; // or just hardcode them

export default createMiddleware({
  // You can also import from next-intl.config.ts
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: true
});

export const config = {
  matcher: ['/', '/(en|fr)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
