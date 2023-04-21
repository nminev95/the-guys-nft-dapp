import Button from '@components/common/Button/Button'
import './Header.scss'
import { useEthers } from '@providers/EthersProvider/EthersProvider'

const Header = () => {
  const { handleConnectWalletButtonClick } = useEthers()
  return (
    <div className="the-guys-header">
      <p>Logo goessshereee</p>
      <Button text="Connect wallet" onClick={handleConnectWalletButtonClick} />
    </div>
  )
}

export default Header
