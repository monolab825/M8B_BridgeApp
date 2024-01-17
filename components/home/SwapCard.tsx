import React, { useState, useEffect } from "react";

import ETH from "@/public/images/eth.svg";
import LYX from "@/public/images/lyx.svg";
import BLYX from "@/public/images/blyx.svg";

import COMMON from "@/utils/constant";

import SwapTokenForm from "./SwapTokenForm";
import SwapButton from "./SwapButton";

import { chainType } from "@/utils/types";

const ETH_FORM: chainType = {
  chainType: COMMON.ETH_MAIN,
  chainIcon: ETH,
  chainName: "Ethereum",
  btnText: "Connect Wallet",
  accountInfo: {
    address: "",
    balance: 0
  },
  tokenIcon: LYX,
  tokenText: "wLYX",
  tokenAmount: 0,
  tokenBalance: 0,
  tokenPrice: 1000,
};

const LUXO_FORM: chainType = {
  chainType: COMMON.LUXO_MAIN,
  chainIcon: BLYX,
  chainName: "LUKSO",
  btnText: "Connect Wallet",
  accountInfo: {
    address: "",
    balance: 0
  },
  tokenIcon: LYX,
  tokenText: "LYX",
  tokenAmount: 0,
  tokenBalance: 0,
  tokenPrice: 1,
}

type props = { isConnected: boolean, accountAddress: string, accountBalance: string, openConnectModal: any };

const SwapCard = ({ isConnected, accountAddress, accountBalance, openConnectModal }: props) => {
  const [currentChain, setCurrentChain] = useState(COMMON.LUXO_MAIN);
  const [swapTokenFromFormState, setSwapTokenFromFormState] = useState({ ...LUXO_FORM });
  const [swapTokenToFormState, setSwapTokenToFormState] = useState({ ...ETH_FORM });

  const onChangeVal = (tokenAmount: number) => {
    if (currentChain == COMMON.ETH_MAIN) {
      LUXO_FORM.tokenAmount = ETH_FORM.tokenPrice / LUXO_FORM.tokenPrice * Number(tokenAmount);
      ETH_FORM.tokenAmount = tokenAmount;
      setSwapTokenFromFormState({ ...ETH_FORM });
      setSwapTokenToFormState({ ...LUXO_FORM });
    } else if (currentChain == COMMON.LUXO_MAIN) {
      ETH_FORM.tokenAmount = LUXO_FORM.tokenPrice / ETH_FORM.tokenPrice * Number(tokenAmount);
      LUXO_FORM.tokenAmount = tokenAmount;
      setSwapTokenFromFormState({ ...LUXO_FORM });
      setSwapTokenToFormState({ ...ETH_FORM });
    }
  };

  const handleMax = () => {
    if (currentChain == COMMON.ETH_MAIN) {
      ETH_FORM.tokenAmount = isConnected ? Number(accountBalance) : 0;
      setSwapTokenFromFormState({ ...ETH_FORM });
    } else if (currentChain == COMMON.LUXO_MAIN) {
      LUXO_FORM.tokenAmount = isConnected ? Number(accountBalance) : 0;
      setSwapTokenFromFormState({ ...LUXO_FORM });
    }
  }

  const onSwap = () => {
    if (currentChain == COMMON.LUXO_MAIN) {
      setSwapTokenFromFormState({ ...ETH_FORM });
      setSwapTokenToFormState({ ...LUXO_FORM })
      setCurrentChain(COMMON.ETH_MAIN);
    } else if (currentChain == COMMON.ETH_MAIN) {
      setSwapTokenFromFormState({ ...LUXO_FORM });
      setSwapTokenToFormState({ ...ETH_FORM });
      setCurrentChain(COMMON.LUXO_MAIN);
    }
  };

  return (
    <>
      <SwapTokenForm
        send={true}
        chainIcon={swapTokenFromFormState.chainIcon}
        chainName={swapTokenFromFormState.chainName}
        btnText={swapTokenFromFormState.btnText}
        actionText={"send"}
        tokenIcon={swapTokenFromFormState.tokenIcon}
        tokenText={swapTokenFromFormState.tokenText}
        tokenAmount={swapTokenFromFormState.tokenAmount}
        onChangeVal={onChangeVal}
        isConnected={isConnected}
        accountAddress={accountAddress}
        accountBalance={accountBalance}
        openConnectModal={openConnectModal}
        handleMax={handleMax}
      />
      <SwapButton onSwap={onSwap}></SwapButton>
      <SwapTokenForm
        send={false}
        chainIcon={swapTokenToFormState.chainIcon}
        chainName={swapTokenToFormState.chainName}
        btnText={swapTokenToFormState.btnText}
        actionText={"receive"}
        tokenIcon={swapTokenToFormState.tokenIcon}
        tokenText={swapTokenToFormState.tokenText}
        tokenAmount={swapTokenToFormState.tokenAmount}
        onChangeVal={onChangeVal}
        isConnected={isConnected}
        accountAddress={accountAddress}
        accountBalance={accountBalance}
        openConnectModal={openConnectModal}
        handleMax={handleMax}
      />
    </>
  );
}

export default SwapCard;