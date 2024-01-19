const COMMON = {
  LUXO_MAIN: 42,
  ETH_MAIN: 1,

  TOKEN_AMOUNT_MAX: 1e23,
}

export const luxochain_mainnet = {
  id: 42,
  // name: 'LUKSO',
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

export const luxochain_testnet = {
  id: 4201,
  name: 'LUKSO Testnet',
  network: 'LUKSO Testnet',
  iconUrl: 'https://icons8.com/icon/Lvi9wlesXBIE/chain',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: '	LYXt',
    symbol: '	LYXt',
  },
  rpcUrls: {
    public: { http: ['https://rpc.testnet.lukso.network/'] },
    default: { http: ['https://rpc.testnet.lukso.network/'] },
  },
  blockExplorers: {
    default: { name: 'Luxoscan', url: 'https://explorer.execution.testnet.lukso.network/' },
    etherscan: { name: 'Luxoscan', url: 'https://explorer.execution.testnet.lukso.network/' },
  },
  testnet: true,
}

export default COMMON;