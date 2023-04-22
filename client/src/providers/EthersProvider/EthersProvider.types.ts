import { BrowserProvider, ethers } from 'ethers'

export type Props = {
  children: React.ReactNode
}

export type ProviderState = {
  signer: ethers.JsonRpcSigner | null
  provider: BrowserProvider | null
  handleConnectWalletButtonClick: () => Promise<void>
}
