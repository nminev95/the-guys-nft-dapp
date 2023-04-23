import { useEthers } from '@providers/EthersProvider/EthersProvider'
import Button from '@components/common/Button/Button'
import MetaMaskAvatar from '@components/MetaMaskAvatar/MetaMaskAvatar'
import Formatters from '@utils/helpers/formatters'

import Modal from '@components/common/Modal/Modal'
import { Box, useDisclosure } from '@chakra-ui/react'
import Paragraph from '@components/common/Text/Paragraph'

const ConnectWalletButton = () => {
  const { balance, signer, handleConnectWalletButtonClick } = useEthers()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      {signer ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="lg"
          background="additional.transparentBlack"
          padding="px"
        >
          <Paragraph
            paddingLeft="3"
            paddingRight="2"
            color="teal.200"
            fontWeight="semibold"
          >
            {balance} ETH
          </Paragraph>
          <Button
            display="flex"
            alignItems="center"
            gap="2"
            border="1px"
            borderColor="teal.800"
            size="sm"
            onClick={onOpen}
          >
            <Paragraph>
              {Formatters.formatAccountAddressForShortView(signer.address)}
            </Paragraph>
            <MetaMaskAvatar />
          </Button>
        </Box>
      ) : (
        <Button size="sm" onClick={handleConnectWalletButtonClick}>
          Connect wallet
        </Button>
      )}
      <Modal isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default ConnectWalletButton
