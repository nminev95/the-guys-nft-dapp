import Button from '@components/common/Button/Button'
import './Header.scss'
import { useEthers } from '@providers/EthersProvider/EthersProvider'

const Header = () => {
  const { handleConnectWalletButtonClick } = useEthers()
  return (
    <div className="the-guys-header">
      <p>Logo goessshereee</p>
      <Button
        sx={{
          textTransform: 'capitalize',
          letterSpacing: '0.5px',
          fontWeight: 600
        }}
        variant="contained"
        color="secondary"
        onClick={handleConnectWalletButtonClick}
      >
        Connect Wallet
      </Button>
    </div>
  )
}

export default Header
