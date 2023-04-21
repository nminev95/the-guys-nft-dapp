import { ethers } from 'ethers'
import { createContext, useState } from 'react'

type Props = {
  children: React.ReactNode
}

type EthersContextType = {
  provider: any
  signer: any
}

const EthersContext = createContext<EthersContextType>({
  provider: null,
  signer: null
})

const EthersContextProvider = ({ children }: Props) => {
  const [web3Provider, setWeb3Provider] = useState(null)
  const initialContext: EthersContextType = {
    provider: null,
    signer: null
  }

  console.log('test')
  // const provider = new ethers.BrowserProvider(window)
  return (
    <EthersContext.Provider value={initialContext}>
      {children}
    </EthersContext.Provider>
  )
}

export default EthersContextProvider
