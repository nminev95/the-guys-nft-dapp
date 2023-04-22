import Button from '@components/common/Button/Button'
import { useEthers } from '@providers/EthersProvider/EthersProvider'

import './ConnectWalletButton.scss'
import Formatters from '@utils/helpers/formatters'
import MetaMaskAvatar from '@components/MetaMaskAvatar/MetaMaskAvatar'
const ConnectWalletButton = () => {
  const { balance, provider, signer, handleConnectWalletButtonClick } =
    useEthers()

  return (
    <div className="ConnectWalletButton">
      {signer ? (
        <div className="connected-wallet-button-wrapper">
          <p className="connected-wallet-button-balance">{balance} ETH</p>
          <Button variant="primary" onClick={() => {}}>
            {Formatters.formatAccountAddressForShortView(signer.address)}
            <MetaMaskAvatar />
          </Button>
        </div>
      ) : (
        <Button variant="primary" onClick={handleConnectWalletButtonClick}>
          Connect wallet
        </Button>
      )}
    </div>
  )
}

export default ConnectWalletButton
