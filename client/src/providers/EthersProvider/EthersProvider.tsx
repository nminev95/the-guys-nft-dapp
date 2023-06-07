import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react'
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
  resetProviderState: () => {},
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
    localStorage.setItem('webStatus', 'disconnected')
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
    if (
      window.ethereum?.isConnected() &&
      localStorage.getItem('webStatus') === 'neutral'
    ) {
      checkConnection()
    }
  }, [])

  useEffect(() => {
    const handleAccountChange = async () => {
      const accounts = (await window.ethereum.request({
        method: 'eth_accounts'
      })) as string[]
      if (accounts.length) {
        await populateProviderState()
      } else {
        resetProviderState()
        localStorage.setItem('webStatus', 'neutral')
      }
    }
    window.ethereum.on('chainChanged', populateProviderState)
    window.ethereum.on('accountsChanged', handleAccountChange)

    return () => {
      window.ethereum.removeListener('chainChanged', populateProviderState)
      window.ethereum.removeListener('accountsChanged', handleAccountChange)
    }
  }, [])

  const handleConnectWalletButtonClick = async () => {
    if (window.ethereum == null) {
      generateWarningMessage(
        'Please install MetaMask in order to connect your wallet.'
      )
    } else if (localStorage.getItem('webStatus') === 'disconnected') {
      await providerState.provider?.send('wallet_requestPermissions', [
        {
          eth_accounts: {}
        }
      ])
      // console.log(res)
      // const res2 = await window.ethereum.request({
      //   method: 'wallet_requestPermissions',
      //   params: [
      //     {
      //       eth_accounts: {}
      //     }
      //   ]
      // })
      // console.log(res2)
      await populateProviderState()
      localStorage.setItem('webStatus', 'neutral')
    } else {
      await populateProviderState()
      generateSuccessMessage('Wallet connected succesfully.')
    }
  }

  return (
    <EthersContext.Provider
      value={{
        ...providerState,
        resetProviderState,
        handleConnectWalletButtonClick
      }}
    >
      {children}
    </EthersContext.Provider>
  )
}

export const useEthers = () => useContext(EthersContext)
