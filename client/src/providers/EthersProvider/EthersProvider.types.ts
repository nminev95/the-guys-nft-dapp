import { BrowserProvider, Network, ethers } from 'ethers'

export type Props = {
  children: React.ReactNode
}

export type ProviderState = {
  signer: ethers.JsonRpcSigner | null
  provider: BrowserProvider | null
  balance: string
  network: Network | null
}

export type CustomState = {
  handleConnectWalletButtonClick: () => Promise<void>
  resetProviderState: () => void
}

export type State = ProviderState & CustomState
