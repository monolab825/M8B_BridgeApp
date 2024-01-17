import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

const ConnectButton = () => {
  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  // const { data: ensName } = useEnsName({ address });
  // const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  const swap = () => {
    // swap logic
  };

  return (
    <div className="mt-4">
      {!isConnected ? (
        <button
          onClick={openConnectModal}
          type="button"
          className="bg-indigo-700  text-white px-5 py-3 me-2 mb-2 text-sm rounded-lg hover:bg-blue-900 w-full"
        >
          Connect Wallet
        </button>
      ) : (
        <button
          onClick={swap}
          type="button"
          className="bg-indigo-700  text-white px-5 py-3 me-2 mb-2 text-sm rounded-lg hover:bg-blue-900 w-full"
        >
          swap
        </button>
      )}
    </div>
  );
};

export default ConnectButton;
