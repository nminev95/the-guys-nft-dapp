import { ethers, formatEther } from 'ethers'

const extractMetamaskData = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum)
  const signer = await provider.getSigner()
  const balance = await provider.getBalance(signer.address)
  const address = await signer.getAddress()
  const network = await provider?.getNetwork()

  return {
    provider,
    signer,
    balance: formatEther(balance),
    address,
    network
  }
}

const Helpers = {
  extractMetamaskData
}

export default Helpers
