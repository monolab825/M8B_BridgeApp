import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import Layout from "@/src/components/layout/Layout";
import HomePage from "@/src/containers/home-page/Index";

import { HompageStrings } from "@/src/utils/types";

import "../globals.css";


type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {

  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('HomePage');

  const head_strings: HompageStrings = {
    Description: {
      description1: t('Description.description1'),
      description2: t('Description.description2'),
      help_link: t('Description.help_link')
    },
    Bridge_From: {
      label_txt: t('Bridge_From.label_txt'),
      btn_txt: t('Bridge_From.btn_txt'),
      send_txt: t('Bridge_From.send_txt'),
      balance_txt: t('Bridge_From.balance_txt'),
      max_txt: t('Bridge_From.max_txt')
    },
    Bridge_To: {
      label_txt: t('Bridge_To.label_txt'),
      btn_txt: t('Bridge_To.btn_txt'),
      recieve_txt: t('Bridge_To.recieve_txt')
    },
    Bridge_Buttons: {
      connect_button_txt: t('Bridge_Buttons.connect_button_txt'),
      swap_button_txt: t('Bridge_Buttons.swap_button_txt')
    }
  }

  return (
    <Layout
      className={`mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg`}
    >
      <HomePage head_strings={head_strings}></HomePage>
    </Layout>
  );
}
