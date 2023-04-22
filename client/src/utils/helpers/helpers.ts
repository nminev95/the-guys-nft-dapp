import { ethers } from 'ethers'

const extractSignerAndProviderFromAddress = (address: string) => {
  const ethersProvider = new ethers.BrowserProvider(window.ethereum)
}
