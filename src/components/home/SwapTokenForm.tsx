import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import SwapCard from "./SwapCard";

import { SwapCardProps } from "@/src/utils/types";

type props = {
  chainIcon: string;
  tokenIcon: string;
  onChangeVal: any;
  openConnectModal: any;
  handleMax: any;
  swapTokenFormData: SwapCardProps;
};

const SwapTokenForm = ({
  chainIcon,
  tokenIcon,
  onChangeVal,
  openConnectModal,
  handleMax,
  swapTokenFormData,
}: props) => {

  const handleMaxButtonClick = () => {
    handleMax();
  };

  function truncate(str: string, a: number, b: number) {
    return str.length > a && str.length > b
      ? str.slice(0, a - 1) + "..." + str.slice(b)
      : str;
  }

  return (
    <>
      <p className="py-3">
        {swapTokenFormData.send
          ? swapTokenFormData.fromText
          : swapTokenFormData.ToText}
      </p>
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
            <p className="">{swapTokenFormData.chainName}</p>
            {!swapTokenFormData.isConnected ? (
              <span
                className="underline hover:cursor-pointer"
                onClick={openConnectModal}
              >
                {swapTokenFormData.btnText}
              </span>
            ) : (
              <p className="">
                {truncate(swapTokenFormData.accountAddress, 6, 38)}
              </p>
            )}
          </div>
        </div>
        <div className="grow bg-gray-800 rounded-xl py-5 px-5 mt-2">
          <p className="text-blue-200 text-sm">
            {swapTokenFormData.actionText}
          </p>
          <div className="flex justify-between mt-3">
            <div className="text-2xl">
              {swapTokenFormData.send ? (
                <input
                  type="Number"
                  id="input_send_amount"
                  className="bg-transparent w-[calc(100%-10px)] outline-none"
                  autoFocus={true}
                  value={swapTokenFormData.tokenAmount}
                  onChange={(e) => onChangeVal(Number(e.target.value))}
                />
              ) : (
                <input
                  type="Number"
                  id="display_recive_amount"
                  className="bg-transparent w-[calc(100%-10px)] outline-none"
                  disabled
                  value={swapTokenFormData.tokenAmount}
                />
              )}
            </div>
            <div className="flex justify-between ">
              <Image src={tokenIcon} alt="lyx" />
              <div className="ml-2 mt-1">{swapTokenFormData.tokenText}</div>
            </div>
          </div>
          <div className="mt-[25px]">
            <div className="flex text-blue-200 text-sm">
              <div className="mr-auto">
                ${swapTokenFormData.priceVal?.toString()}
              </div>
              {swapTokenFormData.send && (
                <div className="ml-auto">
                  {swapTokenFormData.balanceText}:{" "}
                  {swapTokenFormData.accountBalance}
                  <span
                    className="underline ml-2 hover:cursor-pointer"
                    onClick={handleMaxButtonClick}
                  >
                    {swapTokenFormData.maxText}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwapTokenForm;
