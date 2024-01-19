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

import { useTranslations } from 'next-intl';

import { luxochain_mainnet } from "@/src/utils/constant";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    // polygon,
    // optimism,
    // arbitrum,
    // base,
    // zora,
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
    luxochain_mainnet,
    // luxochain_testnet
  ],
  [publicProvider()]
);

const projectId: string = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECTID || "";

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

export function Providers(
  { children, locale }: { children: React.ReactNode, locale: Locale }
) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={demoAppInfo} initialChain={luxochain_mainnet} locale={locale}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
