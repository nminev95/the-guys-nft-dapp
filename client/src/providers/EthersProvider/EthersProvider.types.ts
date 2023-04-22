import { BrowserProvider, ethers } from 'ethers'

export type Props = {
  children: React.ReactNode
}

export type ProviderState = {
  signer: ethers.JsonRpcSigner | null
  provider: BrowserProvider | null
  balance: string
  handleConnectWalletButtonClick: () => Promise<void>
}
