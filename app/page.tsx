import Layout from "@/components/layout/Layout";
import HomePage from "@/containers/home-page/Index";

export default function Home() {
  return (
    <Layout
      className={`mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg`}
    >
      <HomePage></HomePage>
    </Layout>
  );
}
