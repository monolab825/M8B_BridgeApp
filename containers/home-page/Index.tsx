import Link from "next/link";

import Layout from "@/components/layout/Layout";
import ConnectFrom from "./ConnectForm";

export default function Home() {
  return (
    <main className="">
      <Layout>
        <ConnectFrom></ConnectFrom>
      </Layout>
    </main>
  )
}
