import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl';

type props = {
  send: boolean;
  chainIcon: string;
  chainName: string;
  btnText: string;
  actionText: string;
  tokenIcon: string;
  tokenText: string;
  tokenAmount?: number;
  onChangeVal: any;
  isConnected: boolean,
  accountAddress: string,
  accountBalance: string,
  openConnectModal: any,
  handleMax: any
}

const SwapTokenForm = ({ send,
  chainIcon,
  chainName,
  actionText,
  tokenIcon,
  tokenText,
  tokenAmount,
  onChangeVal,
  isConnected,
  accountAddress,
  accountBalance,
  openConnectModal,
  handleMax
}: props) => {
  const [sendAmount, setSendAmount] = useState(0);
  const [receiveAmount, setReceiveAmount] = useState(0);
  // const t = useTranslations('Providers');

  const handleMaxButtonClick = () => {
    handleMax();
  };

  function truncate(str: string, a: number, b: number) {
    return (str.length > a && str.length > b) ? str.slice(0, a - 1) + '...' + str.slice(b) : str;
  };

  return (
    <>
      {/* <h1>{t('title')}</h1> */}
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
              <p className="">{truncate(accountAddress, 6, 38)}</p>
            )}
          </div>
        </div>
        <div className="grow bg-gray-800 rounded-xl py-5 px-5 mt-2">
          <p className="text-blue-200 text-sm">{actionText}:</p>
          <div className="flex justify-between mt-3">
            <div className="text-2xl">
              {send ? (
                <input
                  type="Number"
                  className="bg-transparent w-[calc(100%-10px)] outline-none"
                  autoFocus={true}
                  value={tokenAmount}
                  onChange={(e) => onChangeVal(Number(e.target.value))}
                />
              ) : (
                <input
                  type="Number"
                  className="bg-transparent w-[calc(100%-10px)] outline-none"
                  disabled
                  value={tokenAmount}
                />
                // <div className="w-[calc(100%-30px)]">{tokenAmount}</div>
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
                  Balance: {accountBalance}
                  <span
                    className="underline ml-2 hover:cursor-pointer"
                    onClick={handleMaxButtonClick}
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

export default SwapTokenForm;