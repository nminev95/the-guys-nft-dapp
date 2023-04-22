import { createContext, useContext, useState, useRef, useEffect } from 'react'
import { BrowserProvider, ethers } from 'ethers'
import {
  Props,
  ProviderState
} from '@providers/EthersProvider/EthersProvider.types'
import jazzicon from '@metamask/jazzicon'
import useNotification from '@utils/hooks/useNotification'

const EthersContext = createContext<ProviderState>({} as ProviderState)

export const EthersContextProvider = ({ children }: Props) => {
  const { generateWarningMessage, generateSuccessMessage } = useNotification()
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null)
  const [provider, setProvider] = useState<BrowserProvider | null>(null)

  useEffect(() => {
    const checkConnection = async () => {
      const accounts = (await window.ethereum.request({
        method: 'eth_accounts'
      })) as string[]
      if (accounts.length) {
        const ethersProvider = new ethers.BrowserProvider(window.ethereum)
        setProvider(ethersProvider)
        const ethersSigner = await ethersProvider.getSigner()
        setSigner(ethersSigner)
      }
    }
    if (window.ethereum?.isConnected()) {
      checkConnection()
    }
    window.ethereum?.on('chainChanged', (chainId: any) => console.log(chainId))
  }, [])

  const handleConnectWalletButtonClick = async () => {
    if (window.ethereum == null) {
      generateWarningMessage(
        'Please install MetaMask in order to connect your wallet.'
      )
    } else {
      const ethersProvider = new ethers.BrowserProvider(window.ethereum)
      setProvider(ethersProvider)
      const ethersSigner = await ethersProvider.getSigner()
      setSigner(ethersSigner)
      generateSuccessMessage('Wallet connected succesfully.')
    }
  }

  return (
    <EthersContext.Provider
      value={{
        signer,
        provider,
        handleConnectWalletButtonClick
      }}
    >
      {children}
    </EthersContext.Provider>
  )
}

export const useEthers = () => useContext(EthersContext)
