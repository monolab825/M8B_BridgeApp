'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  Locale,
} from '@rainbow-me/rainbowkit';
import {
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {
  mainnet,
} from 'wagmi/chains';

import { LUXSOCHAIN_MAINNET } from "@/src/utils/constant";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    LUXSOCHAIN_MAINNET,
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
      <RainbowKitProvider chains={chains} appInfo={demoAppInfo} initialChain={LUXSOCHAIN_MAINNET} locale={locale}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
