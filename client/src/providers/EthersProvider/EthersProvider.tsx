import { createContext, useContext, useState } from 'react'
import { ethers } from 'ethers'
import {
  Props,
  ProviderState
} from '@providers/EthersProvider/EthersProvider.types'
import { useNotification } from '@providers/NotificationProvider/NotificationProvider'
import { NotificationType } from '@providers/NotificationProvider/NotificationProvider.types'

const EthersContext = createContext<ProviderState>({} as ProviderState)

export const EthersContextProvider = ({ children }: Props) => {
  const { showNotification, hideNotification } = useNotification()
  const [web3Provider, setWeb3Provider] = useState(null)

  const handleConnectWalletButtonClick = async () => {
    if (window.ethereum == null) {
      showNotification({
        text: 'Please install MetaMask in order to connect your wallet.',
        type: NotificationType.WARNING,
        isVisible: true,
        hideNotification
      })
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
