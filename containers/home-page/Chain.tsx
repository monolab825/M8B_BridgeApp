import Image from "next/image";

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

const Chain = ({
  chainIcon,
  tokenIcon,
  chainName,
  buttonText,
  actionText,
  TokenText,
  isBallance = false,
  isConnected = false,
}: connectProps) => {
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
          <p className="">{buttonText}</p>
        </div>
      </div>
      <div className="grow bg-gray-800 rounded-xl py-5 px-5 mt-2">
        <p className="text-blue-200 text-sm">{actionText}:</p>
        <div className="flex justify-between mt-3">
          <div className="text-2xl">0.0</div>
          <div className="flex justify-between ">
            <Image src={tokenIcon} alt="lyx" />
            <div className="ml-2 mt-1">{TokenText}</div>
          </div>
        </div>
        <div className="mt-[25px]">
          <div className="flex text-blue-200 text-sm">
            <div className="mr-auto">$0.0</div>
            {isBallance ? (
              <div className="ml-auto">Balance: 46.332 Max</div>
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
