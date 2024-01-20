import { useTranslations } from 'next-intl';

import Header from "./Header";
import { HeadStrings } from "@/src/utils/types";

type Props = {
  children: React.ReactNode;
  className?: String;
};

const Layout = ({ children, className = "" }: Props) => {

  const t = useTranslations('LayoutPage');

  const headStrings: HeadStrings = {
    btn_history: t('Head.btn_history'),
    btn_connect: t('Head.btn_connect'),
    btn_disconnect: t('Head.btn_disconnect')
  }

  return (
    <div className="">
      <Header headStrings={headStrings} />
      <main className={`${className}`}>{children}</main>
    </div>
  );
};

export default Layout;
