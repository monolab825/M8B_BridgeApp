export type HeadStrings = {
  btn_history: string,
  btn_connect: string,
  btn_disconnect: string
}

export type SwapCardStrings = {
  from_label_txt: string,
  to_label_txt: string,
  balance_txt: string,
  max_txt: string,
  connect_button_txt: string
  send_txt: string,
  receive_txt: string
}

export type SwapCardProps = {
  send: boolean,
  chainName: string,
  btnText: string,
  actionText: string,
  tokenText: string,
  tokenAmount: any,
  isConnected: boolean,
  accountAddress: string,
  accountBalance: any,
  balanceText: string,
  maxText: string,
  priceVal: number,
  fromText: string,
  ToText: string
}

export type HompageStrings = {
  Description: {
    description1: string,
    description2: string,
    help_link: string
  },
  Bridge_From: {
    label_txt: string,
    btn_txt: string,
    send_txt: string,
    balance_txt: string,
    max_txt: string
  },
  Bridge_To: {
    label_txt: string,
    btn_txt: string,
    recieve_txt: string
  },
  Bridge_Buttons: {
    connect_button_txt: string,
    swap_button_txt: string
  }
}

export type chainType = {
  chainType: number,
  chainIcon: any,
  chainName: string,
  btnText: string,
  tokenIcon: any,
  tokenText: string,
  tokenAmount: number,
  tokenBalance: number,
  tokenPrice: number,
  accountInfo: {
    address: string,
    balance: number
  },
}
