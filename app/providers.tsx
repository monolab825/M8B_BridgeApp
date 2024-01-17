'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  Locale,
} from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router'
import {
  argentWallet,
  coinbaseWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  zora,
} from 'wagmi/chains';

const luxochain = {
    id: 42,
    name: 'LUKSO',
    network: 'LUKSO',
    iconUrl: 'https://icons8.com/icon/Lvi9wlesXBIE/chain',
    iconBackground: '#fff',
    nativeCurrency: {
      decimals: 18,
      name: 'LYX',
      symbol: 'LYX',
    },
    rpcUrls: {
      public: { http: ['https://rpc.lukso.gateway.fm'] },
      default: { http: ['https://rpc.lukso.gateway.fm'] },
    },
    blockExplorers: {
      default: { name: 'Luxoscan', url: 'https://explorer.execution.mainnet.lukso.network/' },
      etherscan: { name: 'Luxoscan', url: 'https://explorer.execution.mainnet.lukso.network/' },
    },
    testnet: false,
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    // mainnet,
    // polygon,
    // optimism,
    // arbitrum,
    // base,
    // zora,
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
    luxochain
  ],
  [publicProvider()]
);

const projectId = '733cdc250103901f63551441490bea64';

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit Wallet',
  projectId,
  chains,
});

const demoAppInfo = {
  appName: 'Rainbowkit Wallet',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
    //   argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
