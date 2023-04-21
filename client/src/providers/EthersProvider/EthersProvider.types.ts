export type Props = {
  children: React.ReactNode
}

export type ProviderState = {
  web3Provider: any
  handleConnectWalletButtonClick: () => Promise<void>
}
