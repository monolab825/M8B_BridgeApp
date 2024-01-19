"use client";

import Image from "next/image";

import ArrowUp from "@/public/images/arrowUp.svg";
import ArrowDown from "@/public/images/arrowDown.svg";

const SwapButton = ({ onSwap }: { onSwap: any }) => {

  const handleSwap = () => {
    onSwap();
  };

  return (
    <div className="mt-5 text-center">
      <button
        id="exchange_token_form"
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

export default SwapButton;