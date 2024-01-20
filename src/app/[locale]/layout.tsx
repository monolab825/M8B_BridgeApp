import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { Inter } from "next/font/google";

import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { locales } from '../../config';

import '@rainbow-me/rainbowkit/styles.css';
import type { Locale } from '@rainbow-me/rainbowkit';

import "../globals.css";

import { Providers } from './providers';

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'PageTitle' });

  return {
    title: t('title'),
    description: t('description')
  };
}

export default function LocaleLayout(
  { children, params: { locale } }: { children: React.ReactNode, params: { locale: Locale } }
) {

  // Enable static rendering
  unstable_setRequestLocale(locale);


  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale}>
          <Providers locale={locale}>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
