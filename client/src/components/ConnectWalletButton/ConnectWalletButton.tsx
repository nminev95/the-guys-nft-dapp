import Button from '@components/common/Button/Button'
import { useEthers } from '@providers/EthersProvider/EthersProvider'

const ConnectWalletButton = () => {
  const { provider, signer, handleConnectWalletButtonClick } = useEthers()

  return (
    <div className="ConnectWalletButton">
      {signer ? (
        <p>asdasdas</p>
      ) : (
        <Button onClick={handleConnectWalletButtonClick}>Connect Wallet</Button>
      )}
    </div>
  )
}

export default ConnectWalletButton
