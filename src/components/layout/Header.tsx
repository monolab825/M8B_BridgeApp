"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { fadeIn, slideIn } from "@/src/styles/animations";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

import Logo from "@/public/images/logo.svg";

import { HeadStrings } from "@/src/utils/types";

type Props = {
  head_strings: HeadStrings;
};

const LogoPart = () => {
  return (
    <div className="mt-3">
      <motion.div
        variants={fadeIn(0.5)}
        initial="hidden"
        animate="show"
        id="logo"
        className="mt-3"
      >
        <Link href="/">
          <Image src={Logo} alt="logo"></Image>
        </Link>
      </motion.div>
    </div>
  );
};

const NavButtons = ({ head_strings }: Props) => {
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  // const { data: ensName } = useEnsName({ address });
  // const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  return (
    <>
      <motion.div
        variants={fadeIn(0.5)}
        initial="hidden"
        animate="show"
        id="logo"
        className="mt-3 flex"
      >
        <button
          type="button"
          className="bg-transparent text-gray-50 px-5 py-2.5 me-2 mb-2 text-sm rounded-lg border hover:bg-gray-100 hover:text-blue-700 "
        >
          {head_strings.btn_history}
        </button>
        {!isConnected ? (
          <button
            type="button"

            className=" bg-indigo-700  text-white px-5 py-2.5 me-2 mb-2 text-sm rounded-lg hover:bg-blue-900 "
            onClick={openConnectModal}
          >
            {head_strings.btn_connect}
          </button>
        ) : (
          <button
            type="button"

            id="disconnect"
            className=" bg-indigo-700  text-white px-5 py-2.5 me-2 mb-2 text-sm rounded-lg"
            onClick={() => disconnect()}
          >
            {head_strings.btn_disconnect}
          </button>
        )}
      </motion.div>
    </>
  );
};

const Header = ({ head_strings }: Props) => {
  return (
    <div className="lg:flex md:flex sm:flex justify-between px-8 py-4 md:px-6 xl:px-12">
      <LogoPart></LogoPart>
      <NavButtons head_strings={head_strings}></NavButtons>
    </div>
  );
};

export default Header;
