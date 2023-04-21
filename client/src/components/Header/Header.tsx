import Button from '@components/common/Button/Button'
import './Header.scss'
import { useEthersContext } from '@providers/EthersProvider'

const Header = () => {
  const { handleConnectWalletButtonClick } = useEthersContext()
  return (
    <div className="the-guys-header">
      <p>Logo goessshereee</p>
      <Button text="Connect wallet" onClick={handleConnectWalletButtonClick} />
    </div>
  )
}

export default Header
