"use client";

import Link from "next/link";
import Image from "next/image";

import ETH from "@/public/images/eth.svg";
import LYX from "@/public/images/lyx.svg";
import BLYX from "@/public/images/blyx.svg";
import ArrowUp from "@/public/images/arrowUp.svg";
import ArrowDown from "@/public/images/arrowDown.svg";

import { useConnectModal } from "@rainbow-me/rainbowkit";

import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";
import { useEffect, useState } from "react";

export function SwapTokenForm({
  send,
  chainIcon,
  chainName,
  btnText,
  actionText,
  tokenIcon,
  tokenText,
  tokenAmount,
  onChangeVal,
}: {
  send: boolean;
  chainIcon: string;
  chainName: string;
  btnText: string;
  actionText: string;
  tokenIcon: string;
  tokenText: string;
  tokenAmount?: number;
  onChangeVal: any;
}) {
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const [sendAmount, setSendAmount] = useState(0);
  const [receiveAmount, setReceiveAmount] = useState(0);

  const handleMax = () => {
    alert("handle max");
  };

  useEffect(() => {
    console.log("sendAmount", sendAmount, "##;", typeof sendAmount);
    console.log("receiveAmount", receiveAmount);
  }, [sendAmount]);

  return (
    <>
      <p className="py-3">{send ? "From:" : "To:"}</p>
      <div className="lg:flex md:flex sm:flex w-full gap-1">
        <div className="py-2 bg-gray-800 rounded-xl py-5 px-5 mt-2">
          <Image
            src={chainIcon}
            alt="alt"
            width={50}
            height={50}
            className="m-auto"
          />
          <div className="text-center pt-4">
            <p className="">{chainName}</p>
            {!isConnected ? (
              <span
                className="underline hover:cursor-pointer"
                onClick={openConnectModal}
              >
                Connect Wallet
              </span>
            ) : (
              <p className="">{btnText}</p>
            )}
          </div>
        </div>
        <div className="grow bg-gray-800 rounded-xl py-5 px-5 mt-2">
          <p className="text-blue-200 text-sm">{actionText}:</p>
          <div className="flex justify-between mt-3">
            <div className="text-2xl">
              {send ? (
                <input
                  type="text"
                  className="bg-transparent w-20 outline-none"
                  autoFocus={true}
                  value={tokenAmount}
                  onChange={(e) => onChangeVal(send, Number(e.target.value))}
                />
              ) : (
                <span>{tokenAmount}</span>
              )}
            </div>
            <div className="flex justify-between ">
              <Image src={tokenIcon} alt="lyx" />
              <div className="ml-2 mt-1">{tokenText}</div>
            </div>
          </div>
          <div className="mt-[25px]">
            <div className="flex text-blue-200 text-sm">
              <div className="mr-auto">$0.0</div>
              {send && (
                <div className="ml-auto">
                  Balance: 46.332
                  <span
                    className="underline ml-2 hover:cursor-pointer"
                    onClick={handleMax}
                  >
                    Max
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const SwapButton = ({ onSwap }: { onSwap: any }) => {
  const handleSwap = () => {
    onSwap();
  };

  return (
    <div className="mt-5 text-center">
      <button
        className="bg-gray-800 rounded-md py-2 px-2 mx-1 "
        onClick={handleSwap}
      >
        <div className="flex justify-center">
          <Image src={ArrowUp} alt="up" />
          <Image src={ArrowDown} alt="down" />
        </div>
      </button>
    </div>
  );
};

export function SwapCard() {
  const [swapTokenFromFormState, setSwapTokenFromFormState] = useState({
    chainIcon: BLYX,
    chainName: "LUKSO",
    btnText: "Connect Wallet",
    actionText: "Send",
    tokenIcon: LYX,
    tokenText: "LYX",
    tokenAmount: 0,
  });
  const [swapTokenToFormState, setSwapTokenToFormState] = useState({
    chainIcon: ETH,
    chainName: "Ethereum",
    btnText: "Connect Wallet",
    actionText: "Receive",
    tokenIcon: LYX,
    tokenText: "wLYX",
    tokenAmount: 0,
  });

  const onChangeVal = (flag: boolean, tokenAmount) => {
    if (flag) {
      setSwapTokenFromFormState({
        ...swapTokenFromFormState,
        chainIcon: BLYX,
        chainName: "LUKSO",
        btnText: "Connect Wallet",
        tokenText: "LYX",
        tokenAmount: Number(tokenAmount),
      });

      setSwapTokenToFormState({
        ...swapTokenToFormState,
        chainIcon: ETH,
        chainName: "Ethereum",
        btnText: "Connect Wallet",
        tokenText: "wLYX",
        tokenAmount: Number(tokenAmount) * 2,
      });
    }
  };

  const onSwap = () => {
    setSwapTokenFromFormState({
      ...swapTokenFromFormState,
      chainIcon: swapTokenToFormState.chainIcon,
      chainName: swapTokenToFormState.chainName,
      btnText: swapTokenToFormState.btnText,
      tokenText: swapTokenToFormState.tokenText,
      tokenAmount: swapTokenToFormState.tokenAmount,
    });
    setSwapTokenToFormState({
      ...swapTokenToFormState,
      chainIcon: swapTokenFromFormState.chainIcon,
      chainName: swapTokenFromFormState.chainName,
      btnText: swapTokenFromFormState.btnText,
      tokenText: swapTokenFromFormState.tokenText,
      tokenAmount: swapTokenFromFormState.tokenAmount,
    });
  };

  return (
    <>
      <SwapTokenForm
        send={true}
        chainIcon={swapTokenFromFormState.chainIcon}
        chainName={swapTokenFromFormState.chainName}
        btnText={swapTokenFromFormState.btnText}
        actionText={swapTokenFromFormState.actionText}
        tokenIcon={swapTokenFromFormState.tokenIcon}
        tokenText={swapTokenFromFormState.tokenText}
        tokenAmount={swapTokenFromFormState.tokenAmount}
        onChangeVal={onChangeVal}
      />
      <SwapButton onSwap={onSwap}></SwapButton>
      <SwapTokenForm
        send={false}
        chainIcon={swapTokenToFormState.chainIcon}
        chainName={swapTokenToFormState.chainName}
        btnText={swapTokenToFormState.btnText}
        actionText={swapTokenToFormState.actionText}
        tokenIcon={swapTokenToFormState.tokenIcon}
        tokenText={swapTokenToFormState.tokenText}
        tokenAmount={swapTokenToFormState.tokenAmount}
        onChangeVal={onChangeVal}
      />
    </>
  );
}

export default function Home() {
  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

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
          <SwapCard></SwapCard>
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
