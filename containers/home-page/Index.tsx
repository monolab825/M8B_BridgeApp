"use client";

import Link from "next/link";

import { useConnectModal, useChainModal } from "@rainbow-me/rainbowkit";

import { useAccount, useDisconnect, useEnsAvatar, useEnsName, useBalance, useSwitchNetwork } from "wagmi";

import SwapCard from "@/components/home/SwapCard";

export default function Home() {
  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  // const { data: ensName } = useEnsName({ address });
  // const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
  const { data, isError, isLoading } = useBalance({
    // address: address
    address: address
  });

  const onSwap = () => {
    alert("onSwap");
  };

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
          <SwapCard isConnected={isConnected} accountAddress={address as string} accountBalance={data?.formatted || ""} openConnectModal={openConnectModal}></SwapCard>
          {!isConnected ? (
            <button
              className="bg-indigo-700 hover:bg-indigo-800 py-3 rounded-xl w-full mt-4"
              onClick={openConnectModal}
            >
              Connect Wallet
            </button>
          ) : (
            <button
              className="bg-indigo-700 hover:bg-indigo-800 py-3 rounded-xl w-full mt-4"
              onClick={onSwap}
            >
              Swap
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
