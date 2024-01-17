"use client";
import Link from "next/link";
import ETH from "@/public/images/eth.svg";
import LYX from "@/public/images/lyx.svg";
import BLYX from "@/public/images/blyx.svg";

import Chain from "./Chain";
import ReplaceButton from "./ReplaceButton";
import ConnectButton from "./ConnectButton";

export default function Home() {
  return (
    <div className="">
      <div className="lg:w-[617px] xl:w-[617px] mx-auto mt-5 text-white">
        <h1 className="py-1 px-4 font-bold text-2xl text-xl">
          Transfer your tokens across blockchains
        </h1>
        <p className="py-1 px-4 mb-2 text-sm">
          Securely transfer tokens between the LUKSO and Ethereum blockchains.{" "}
          <Link
            href="/"
            className="text-blue-200 decoration-blue-200 underline decoration-solid"
          >
            How it works
          </Link>
        </p>
        <div className="py-10 px-10 rounded-xl border-2 border-blue-900 bg-gray-900">
          <p className="py-3">From:</p>
          <Chain
            chainIcon={BLYX}
            tokenIcon={LYX}
            chainName="Ethereum"
            buttonText="Connect Wallet"
            actionText="Send"
            TokenText="LYX"
            isConnected={false}
            isBallance={true}
          />
          <ReplaceButton />
          <p className="py-3">From:</p>
          <Chain
            chainIcon={ETH}
            tokenIcon={LYX}
            chainName="LUKSO"
            buttonText="Connect Wallet"
            actionText="Receive"
            TokenText="wLYX"
            isConnected={false}
            isBallance={false}
          />
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
