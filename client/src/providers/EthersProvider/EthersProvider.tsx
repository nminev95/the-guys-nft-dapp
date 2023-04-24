import { createContext, useContext, useState, useRef, useEffect } from 'react'
import { BrowserProvider, Network, ethers, formatEther } from 'ethers'
import {
  Props,
  ProviderState
} from '@providers/EthersProvider/EthersProvider.types'
import useNotification from '@utils/hooks/useNotification'

const EthersContext = createContext<ProviderState>({} as ProviderState)

export const EthersContextProvider = ({ children }: Props) => {
  const { generateWarningMessage, generateSuccessMessage } = useNotification()
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null)
  const [provider, setProvider] = useState<BrowserProvider | null>(null)
  const [chain, setChain] = useState<Network | null>(null)
  const [balance, setBalance] = useState('')

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
        const balance = await ethersProvider.getBalance(ethersSigner.address)
        setBalance(formatEther(balance))
        const network = await ethersProvider?.getNetwork()
        setChain(network)
      }
    }
    if (window.ethereum?.isConnected()) {
      checkConnection()
    }
    window.ethereum?.on('chainChanged', async (chainId: any) => {
      const accounts = (await window.ethereum.request({
        method: 'eth_accounts'
      })) as string[]
      console.log(accounts)
      console.log(chainId)
    })
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
      const balance = await ethersProvider.getBalance(ethersSigner.address)
      const network = await provider?.getNetwork()
      console.log(network)
      setBalance(formatEther(balance))
      generateSuccessMessage('Wallet connected succesfully.')
    }
  }

  return (
    <EthersContext.Provider
      value={{
        signer,
        provider,
        balance,
        chain,
        handleConnectWalletButtonClick
      }}
    >
      {children}
    </EthersContext.Provider>
  )
}

export const useEthers = () => useContext(EthersContext)
