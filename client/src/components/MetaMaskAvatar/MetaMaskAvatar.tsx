import jazzicon from '@metamask/jazzicon'
import { useEthers } from '@providers/EthersProvider/EthersProvider'
import { useEffect, useRef } from 'react'

import './MetaMaskAvatar.scss'

const MetaMaskAvatar = () => {
  const avatarRef = useRef<HTMLDivElement>()
  const { signer } = useEthers()

  useEffect(() => {
    if (signer && avatarRef.current) {
      avatarRef.current.innerHTML = ''
      avatarRef.current.appendChild(
        jazzicon(16, parseInt(signer?.address.slice(2, 10), 16))
      )
    }
  }, [signer])

  return <div className="MetaMaskAvatar" ref={avatarRef as any} />
}

export default MetaMaskAvatar
