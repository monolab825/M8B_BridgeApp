import Image from "next/image";

import ArrowUp from "@/public/images/arrowUp.svg";
import ArrowDown from "@/public/images/arrowDown.svg";

const ReplaceButton = () => {
  return (
    <div className="mt-5 text-center">
      <button className="bg-gray-800 rounded-md py-2 px-2 mx-1 ">
        <div className="flex justify-center">
          <Image src={ArrowUp} alt="up" />
          <Image src={ArrowDown} alt="down" />
        </div>
      </button>
    </div>
  );
};

export default ReplaceButton;
