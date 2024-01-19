import React, { useState, useEffect } from "react";

import ETH from "@/public/images/eth.svg";
import LYX from "@/public/images/lyx.svg";
import BLYX from "@/public/images/blyx.svg";

import COMMON from "@/src/utils/constant";

import SwapTokenForm from "./SwapTokenForm";
import SwapButton from "./SwapButton";

import { chainType } from "@/src/utils/types";
import { SwapCardStrings, SwapCardProps } from "@/src/utils/types";


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

const LUXSO_FORM: chainType = {
  chainType: COMMON.LUXSO_MAIN,
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

type props = { isConnected: boolean, accountAddress: string, accountBalance: string, openConnectModal: any, chain: any, switchNetwork: any, swapcard_strings: SwapCardStrings };

const SwapCard = ({ isConnected, accountAddress, accountBalance, openConnectModal, chain, switchNetwork, swapcard_strings }: props) => {
  const [currentChain, setCurrentChain] = useState(COMMON.LUXSO_MAIN);
  const [swapTokenFromFormState, setSwapTokenFromFormState] = useState({ ...LUXSO_FORM });
  const [swapTokenToFormState, setSwapTokenToFormState] = useState({ ...ETH_FORM });

  useEffect(() => {
    if (chain?.id == COMMON.ETH_MAIN) {
      setSwapTokenFromFormState({ ...ETH_FORM });
      setSwapTokenToFormState({ ...LUXSO_FORM })
      setCurrentChain(COMMON.ETH_MAIN);
    } else if (chain?.id == COMMON.LUXSO_MAIN) {
      setSwapTokenFromFormState({ ...LUXSO_FORM });
      setSwapTokenToFormState({ ...ETH_FORM });
      setCurrentChain(COMMON.LUXSO_MAIN);
    }
  }, [chain])

  const onChangeVal = (tokenAmount: number) => {
    if (currentChain == COMMON.ETH_MAIN) {
      LUXSO_FORM.tokenAmount = ETH_FORM.tokenPrice / LUXSO_FORM.tokenPrice * Number(tokenAmount);
      ETH_FORM.tokenAmount = tokenAmount;
      setSwapTokenFromFormState({ ...ETH_FORM });
      setSwapTokenToFormState({ ...LUXSO_FORM });
    } else if (currentChain == COMMON.LUXSO_MAIN) {
      ETH_FORM.tokenAmount = LUXSO_FORM.tokenPrice / ETH_FORM.tokenPrice * Number(tokenAmount);
      LUXSO_FORM.tokenAmount = tokenAmount;
      setSwapTokenFromFormState({ ...LUXSO_FORM });
      setSwapTokenToFormState({ ...ETH_FORM });
    }
  };

  const swapTokenSendForm: SwapCardProps = {
    send: true,
    chainName: swapTokenFromFormState.chainName,
    btnText: swapcard_strings.connect_button_txt,
    actionText: swapcard_strings.send_txt,
    tokenText: swapTokenFromFormState.tokenText,
    tokenAmount: swapTokenFromFormState.tokenAmount,
    isConnected: isConnected,
    accountAddress: accountAddress,
    accountBalance: accountBalance,
    balanceText: swapcard_strings.balance_txt,
    maxText: swapcard_strings.max_txt,
    priceVal: 0.0,
    fromText: swapcard_strings.from_label_txt,
    ToText: swapcard_strings.to_label_txt
  }

  const swapTokenReceiveForm: SwapCardProps = {
    send: false,
    chainName: swapTokenToFormState.chainName,
    btnText: swapcard_strings.connect_button_txt,
    actionText: swapcard_strings.receive_txt,
    tokenText: swapTokenToFormState.tokenText,
    tokenAmount: swapTokenToFormState.tokenAmount,
    isConnected: isConnected,
    accountAddress: accountAddress,
    accountBalance: accountBalance,
    balanceText: swapcard_strings.balance_txt,
    maxText: swapcard_strings.max_txt,
    priceVal: 0.0,
    fromText: swapcard_strings.from_label_txt,
    ToText: swapcard_strings.to_label_txt
  }

  const handleMax = () => {
    if (currentChain == COMMON.ETH_MAIN) {
      ETH_FORM.tokenAmount = isConnected ? Number(accountBalance) : 0;
      setSwapTokenFromFormState({ ...ETH_FORM });
      onChangeVal(ETH_FORM.tokenAmount);
    } else if (currentChain == COMMON.LUXSO_MAIN) {
      LUXSO_FORM.tokenAmount = isConnected ? Number(accountBalance) : 0;
      setSwapTokenFromFormState({ ...LUXSO_FORM });
      onChangeVal(LUXSO_FORM.tokenAmount);
    }
  }

  const onSwap = async () => {
    if (!isConnected)
      return;
    let modifyChainId = COMMON.ETH_MAIN;
    if (currentChain == COMMON.ETH_MAIN) {
      modifyChainId = COMMON.LUXSO_MAIN;
    }
    const network = await switchNetwork({
      chainId: modifyChainId,
    })
  };

  return (
    <>
      <SwapTokenForm
        chainIcon={swapTokenFromFormState.chainIcon}
        tokenIcon={swapTokenFromFormState.tokenIcon}
        onChangeVal={onChangeVal}
        openConnectModal={openConnectModal}
        handleMax={handleMax}
        swapTokenFormData={swapTokenSendForm}
      />
      <SwapButton onSwap={onSwap}></SwapButton>
      <SwapTokenForm
        chainIcon={swapTokenToFormState.chainIcon}
        tokenIcon={swapTokenToFormState.tokenIcon}
        onChangeVal={onChangeVal}
        openConnectModal={openConnectModal}
        handleMax={handleMax}
        swapTokenFormData={swapTokenReceiveForm}
      />
    </>
  );
}

export default SwapCard;