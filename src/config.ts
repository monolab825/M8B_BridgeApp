import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'ja'] as const;

export const pathnames = {
  '/': '/',
  // '/pathnames': {
  //   en: '/pathnames',
  //   ja: '/pfadnamen'
  // }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;