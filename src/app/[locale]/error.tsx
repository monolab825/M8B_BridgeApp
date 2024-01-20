'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

import Layout from "@/src/components/layout/Layout";
import HomePage from "@/src/containers/home-page/Index";

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {

  const t = useTranslations('Error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      {t.rich('description', {
        p: (chunks) => <p>{chunks}</p>,
        retry: (chunks) => (
          <button
            className="text-white underline underline-offset-2"
            onClick={reset}
            type="button"
          >
            {chunks}
          </button>
        )
      })}
    </div>
  );
}