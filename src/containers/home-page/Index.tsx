"use client";

import Link from "next/link";

import { useConnectModal, useChainModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName, useBalance, useSwitchNetwork, useNetwork } from "wagmi";
import { mainnet } from '@wagmi/core/chains'
import { switchNetwork } from '@wagmi/core'

import SwapCard from "@/src/components/home/SwapCard";
import { HompageStrings, SwapCardStrings } from "@/src/utils/types";

type Props = {
  head_strings: HompageStrings
}

export default function Home({ head_strings }: Props) {
  const { openConnectModal } = useConnectModal();
  const { openChainModal } = useChainModal();
  const { address, isConnected } = useAccount();
  const { chain, chains } = useNetwork()
  const { disconnect } = useDisconnect();
  // const { data: ensName } = useEnsName({ address });
  // const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
  const { data, isError, isLoading } = useBalance({
    // address: address
    address: address
  });

  const swapcard_strings: SwapCardStrings = {
    from_label_txt: head_strings.Bridge_From.label_txt,
    to_label_txt: head_strings.Bridge_To.label_txt,
    balance_txt: head_strings.Bridge_From.balance_txt,
    max_txt: head_strings.Bridge_From.max_txt,
    connect_button_txt: head_strings.Bridge_From.btn_txt,
    send_txt: head_strings.Bridge_From.send_txt,
    receive_txt: head_strings.Bridge_To.recieve_txt
  }

  const onSwap = () => {
    alert("onSwap");
  };

  return (
    <div className="">
      <div className="lg:w-[617px] xl:w-[617px] mx-auto mt-5 text-white">
        <h1 className="py-1 px-4 font-bold text-2xl text-xl">
          {head_strings.Description.description1}
        </h1>
        <p className="py-1 px-4 mb-2 text-sm">
          {head_strings.Description.description2 + " "}
          <Link
            href="/"
            className="text-blue-200 decoration-blue-200 underline decoration-solid"
          >
            {head_strings.Description.help_link}
          </Link>
        </p>
        <div className="py-10 px-10 rounded-xl border-2 border-blue-900 bg-gray-900">
          <SwapCard
            isConnected={isConnected} accountAddress={address as string} accountBalance={data?.formatted || ""} openConnectModal={openConnectModal} chain={chain} switchNetwork={switchNetwork} swapcard_strings={swapcard_strings}></SwapCard>
          {!isConnected ? (
            <button
              className="bg-indigo-700 hover:bg-indigo-800 py-3 rounded-xl w-full mt-4"
              onClick={openConnectModal}
            >
              {head_strings.Bridge_Buttons.connect_button_txt}
            </button>
          ) : (
            <button
              className="bg-indigo-700 hover:bg-indigo-800 py-3 rounded-xl w-full mt-4"
              onClick={onSwap}
            >
              {head_strings.Bridge_Buttons.swap_button_txt}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
