import Image from "next/image";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName, useBalance } from "wagmi";
import { fetchBalance } from '@wagmi/core'
import { useEffect, useState } from "react";

type connectProps = {
  chainIcon: string;
  tokenIcon: string;
  chainName?: string;
  buttonText?: string;
  actionText?: string;
  TokenText?: string;
  isBallance: Boolean;
  isConnected: Boolean;
};

let accountBalance = 0;

const Chain = ({
  chainIcon,
  tokenIcon,
  chainName,
  buttonText,
  actionText,
  TokenText,
  isBallance = false,
}: connectProps) => {
  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data, isError, isLoading } = useBalance({
    address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  })
  // const [ accountBalance, setAccountBalance ] = useState("0");
  // const { data: ensName } = useEnsName({ address });
  // const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
  // useEffect(() => {
  //   getBalance();
  // }, [isConnected]);

  // const getBalance = async () => {
  //   if(!isConnected || !address) {
  //     return;
  //   }
  //   const accountBalance = await fetchBalance({
  //     address: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  //     chainId: 1,
  //   })
  //   // setAccountBalance(balance.formatted);
  
  //   console.log("blance", balance.formatted);
  // }
  function truncate(str: string, a:number, b:number){
    return (str.length > a && str.length > b) ? str.slice(0, a-1) + '...' + str.slice(b) : str;
  };

  const handleMax = () => {
    alert("handle max");
  };
  return (
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
            <p className="">{truncate(address as string, 5, 37)}</p>
          )}
        </div>
      </div>
      <div className="grow bg-gray-800 rounded-xl py-5 px-5 mt-2">
        <p className="text-blue-200 text-sm">{actionText}:</p>
        <div className="flex justify-between mt-3">
          <div className="text-2xl">
            {isBallance && (
              <input
                type="text"
                className="bg-transparent w-20 outline-none"
                autoFocus
              ></input>
            )}
          </div>
          <div className="flex justify-between ">
            <Image src={tokenIcon} alt="lyx" />
            <div className="ml-2 mt-1">{TokenText}</div>
          </div>
        </div>
        <div className="mt-[25px]">
          <div className="flex text-blue-200 text-sm">
            <div className="mr-auto">$0.0</div>
            {isBallance ? (
              <div className="ml-auto">
                Balance: {isConnected ? data?.formatted : 0}
                <span
                  className="underline ml-2 hover:cursor-pointer"
                  onClick={handleMax}
                >
                  Max
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chain;
