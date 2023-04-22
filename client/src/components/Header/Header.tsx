import Button from '@components/common/Button/Button'
import './Header.scss'
import { useEthers } from '@providers/EthersProvider/EthersProvider'
import ConnectWalletButton from '@components/ConnectWalletButton/ConnectWalletButton'

const Header = () => {
  return (
    <div className="the-guys-header">
      {/* <div ref={avatarRef}></div> */}
      <p>Logo goessshereee</p>
      <ConnectWalletButton />
    </div>
  )
}

export default Header
