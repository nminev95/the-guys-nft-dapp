import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useReducer,
  useCallback
} from 'react'
import {
  BrowserProvider,
  Network,
  ethers,
  formatEther,
  ProviderEvent
} from 'ethers'
import {
  Props,
  ProviderState,
  State
} from '@providers/EthersProvider/EthersProvider.types'
import useNotification from '@utils/hooks/useNotification'
import Helpers from '@utils/helpers/helpers'

const initialState = {
  signer: null,
  provider: null,
  balance: '',
  network: null,
  handleConnectWalletButtonClick: async () => {}
}

const EthersContext = createContext<State>(initialState)

export const EthersContextProvider = ({ children }: Props) => {
  const [providerState, setProviderState] =
    useState<ProviderState>(initialState)
  const { generateWarningMessage, generateSuccessMessage } = useNotification()

  const populateProviderState = useCallback(async () => {
    const { provider, signer, balance, network } =
      await Helpers.extractMetamaskData()
    setProviderState({ provider, signer, balance, network })
  }, [])

  const resetProviderState = useCallback(async () => {
    setProviderState(initialState)
  }, [])

  useEffect(() => {
    const checkConnection = async () => {
      const accounts = (await window.ethereum.request({
        method: 'eth_accounts'
      })) as string[]
      if (accounts.length) {
        await populateProviderState()
      }
    }
    if (window.ethereum?.isConnected()) {
      checkConnection()
    }
  }, [])

  useEffect(() => {
    const handleAccountChange = async () => {
      ;async () => {
        const accounts = (await window.ethereum.request({
          method: 'eth_accounts'
        })) as string[]
        if (accounts.length) {
          await populateProviderState()
        } else {
          resetProviderState()
        }
      }
    }
    window.ethereum.on('chainChanged', populateProviderState)
    window.ethereum.on('accountsChanged', handleAccountChange)

    return () => {
      window.ethereum.off('chainChanged', populateProviderState)
      window.ethereum.off('accountsChanged', handleAccountChange)
    }
  }, [])

  const handleConnectWalletButtonClick = async () => {
    if (window.ethereum == null) {
      generateWarningMessage(
        'Please install MetaMask in order to connect your wallet.'
      )
    } else {
      await populateProviderState()
      generateSuccessMessage('Wallet connected succesfully.')
    }
  }

  return (
    <EthersContext.Provider
      value={{
        ...providerState,
        handleConnectWalletButtonClick
      }}
    >
      {children}
    </EthersContext.Provider>
  )
}

export const useEthers = () => useContext(EthersContext)
