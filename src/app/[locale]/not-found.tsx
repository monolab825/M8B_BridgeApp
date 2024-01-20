import { useTranslations } from 'next-intl';
import Layout from "@/src/components/layout/Layout";

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <Layout
      className={`mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg`}
    >
      <h1 className="max-w-[460px]">{t('description')}</h1>
    </Layout>
  );
}
