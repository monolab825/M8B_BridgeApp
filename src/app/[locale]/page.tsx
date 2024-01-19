import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import Layout from "@/src/components/layout/Layout";
import HomePage from "@/src/containers/home-page/Index";

import "../globals.css";


type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {

  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('LayoutPage');

  return (
    <Layout
      className={`mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg`}
    >
      <HomePage></HomePage>
    </Layout>
  );
}
