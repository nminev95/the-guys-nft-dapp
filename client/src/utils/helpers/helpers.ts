import { ethers } from 'ethers'

const extractMetamaskData = async () => {
  const ethersProvider = new ethers.BrowserProvider(window.ethereum)
  const ethersSigner = await ethersProvider.getSigner()
  const balance = await ethersProvider.getBalance(ethersSigner.address)
  const address = await ethersSigner.getAddress()
  const network = await ethersProvider?.getNetwork()

  return {
    ethersProvider,
    ethersSigner,
    balance,
    address,
    network
  }
}

const Helpers = {
  extractMetamaskData
}

export default Helpers
