import Link from "next/link";

import Layout from "@/components/layout/Layout";
import ConnectFrom from "./ConnectForm";

export default function Home() {
  return (
    <main className="">
      <Layout className={`mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg`}>
        <ConnectFrom></ConnectFrom>
      </Layout>
    </main>
  )
}
