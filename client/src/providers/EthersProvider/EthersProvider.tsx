import { createContext, useContext, useState } from 'react'
import ethers from 'ethers'
import {
  Props,
  ProviderState
} from '@providers/EthersProvider/EthersProvider.types'

const EthersContext = createContext<ProviderState>({} as ProviderState)

const EthersContextProvider = ({ children }: Props) => {
  const [web3Provider, setWeb3Provider] = useState(null)

  const handleConnectWalletButtonClick = async () => {
    if (window.ethereum == null) {
      alert('METAMASK INSTALL!!')
    } else {
      const provider = new ethers.BrowserProvider(window.ethereum)

      // It also provides an opportunity to request access to write
      // operations, which will be performed by the private key
      // that MetaMask manages for the user.
      const signer = await provider.getSigner()
      // new ethers
    }
  }

  return (
    <EthersContext.Provider
      value={{
        web3Provider,
        handleConnectWalletButtonClick
      }}
    >
      {children}
    </EthersContext.Provider>
  )
}

export const useEthers = () => useContext(EthersContext)

export default EthersContextProvider
