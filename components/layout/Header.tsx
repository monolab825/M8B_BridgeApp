"use client";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/images/logo.svg";

import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

const LogoPart = () => {
  return (
    <div className="mt-3">
      <Link href="/">
        <Image src={Logo} alt="logo"></Image>
      </Link>
    </div>
  );
};

const NavButtons = () => {
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  // const { data: ensName } = useEnsName({ address });
  // const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  return (
    <div className="mt-3 flex">
      <button
        type="button"
        className="bg-transparent text-gray-50 px-5 py-2.5 me-2 mb-2 text-sm rounded-lg border hover:bg-gray-100 hover:text-blue-700 "
      >
        History
      </button>
      {!isConnected ? (
        <button
          type="button"
          className=" bg-indigo-700  text-white px-5 py-2.5 me-2 mb-2 text-sm rounded-lg hover:bg-blue-900 "
          onClick={openConnectModal}
        >
          Connect Wallet
        </button>
      ) : (
        <button
          type="button"
          className=" bg-indigo-700  text-white px-5 py-2.5 me-2 mb-2 text-sm rounded-lg"
          onClick={() => disconnect()}
        >
          Wallet
        </button>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <div className="lg:flex md:flex sm:flex justify-between px-8 py-4 md:px-6 xl:px-12">
      <LogoPart></LogoPart>
      <NavButtons></NavButtons>
    </div>
  );
};

export default Header;
