import { BrowserProvider, Network, ethers } from 'ethers'

export type Props = {
  children: React.ReactNode
}

export type ProviderState = {
  signer: ethers.JsonRpcSigner | null
  provider: BrowserProvider | null
  balance: string
  chain: Network | null
  handleConnectWalletButtonClick: () => Promise<void>
}
