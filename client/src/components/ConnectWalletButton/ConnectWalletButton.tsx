import { useEthers } from '@providers/EthersProvider/EthersProvider'
import Button from '@components/common/Button/Button'
import MetaMaskAvatar from '@components/MetaMaskAvatar/MetaMaskAvatar'
import Formatters from '@utils/helpers/formatters'

import './ConnectWalletButton.scss'
import Modal from '@components/common/Modal/Modal'
import { Box, Text, useDisclosure } from '@chakra-ui/react'

const ConnectWalletButton = () => {
  const { balance, provider, signer, handleConnectWalletButtonClick } =
    useEthers()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      {signer ? (
        <Box>
          <Text>{balance} ETH</Text>
          <Button onClick={onOpen}>
            <Text>
              {Formatters.formatAccountAddressForShortView(signer.address)}
            </Text>
            <MetaMaskAvatar />
          </Button>
        </Box>
      ) : (
        <Button onClick={handleConnectWalletButtonClick}>Connect wallet</Button>
      )}
      <Modal isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default ConnectWalletButton
