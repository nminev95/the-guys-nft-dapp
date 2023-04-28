import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useReducer
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
  ProviderState
} from '@providers/EthersProvider/EthersProvider.types'
import useNotification from '@utils/hooks/useNotification'
import Helpers from '@utils/helpers/helpers'

const initialState = {
  signer: null,
  provider: null,
  balance: '',
  chain: null,
  handleConnectWalletButtonClick: async () => {}
}

const EthersContext = createContext<ProviderState>(initialState)

enum ACTIONS {
  SET_SIGNER = 'setSigner',
  SET_PROVIDER = 'setProvider',
  SET_NETWORK = 'setNetwork',
  SET_BALANCE = 'setBalance',
  SET_ADDRESS = 'setAddress'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_SIGNER:
      return { ...state, signer: }
  }
}

export const EthersContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
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
        const address = await ethersSigner.getAddress()
        const network = await ethersProvider?.getNetwork()
        setChain(network)
      }
    }
    if (window.ethereum?.isConnected()) {
      checkConnection()
    }
  }, [])

  useEffect(() => {
    window.ethereum?.on('chainChanged', async () => {
      console.log('chain change')
      const ethersProvider = new ethers.BrowserProvider(window.ethereum)
      setProvider(ethersProvider)
      const ethersSigner = await ethersProvider.getSigner()
      setSigner(ethersSigner)
      const balance = await ethersProvider.getBalance(ethersSigner.address)
      setBalance(formatEther(balance))
      const network = await ethersProvider?.getNetwork()
      setChain(network)
    })
    window.ethereum.on('accountsChanged', async () => {
      const accounts = (await window.ethereum.request({
        method: 'eth_accounts'
      })) as string[]
      if (accounts.length) {
        console.log(accounts)
        const ethersProvider = new ethers.BrowserProvider(window.ethereum)
        setProvider(ethersProvider)
        const ethersSigner = await ethersProvider.getSigner()
        setSigner(ethersSigner)
        const balance = await ethersProvider.getBalance(ethersSigner.address)
        setBalance(formatEther(balance))
        const network = await ethersProvider?.getNetwork()
        setChain(network)
      } else {
        setProvider(null)
        setSigner(null)
        setBalance('')
        setChain(null)
      }
    })
  }, [])

  const handleConnectWalletButtonClick = async () => {
    if (window.ethereum == null) {
      generateWarningMessage(
        'Please install MetaMask in order to connect your wallet.'
      )
    } else {
      const { ethersProvider, ethersSigner, balance, network, address } =
        await Helpers.extractMetamaskData()
      setProvider(ethersProvider)
      setSigner(ethersSigner)
      setChain(network)
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
