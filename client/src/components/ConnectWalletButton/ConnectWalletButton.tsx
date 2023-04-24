import { useEthers } from '@providers/EthersProvider/EthersProvider'
import Button from '@components/common/Button/Button'
import MetaMaskAvatar from '@components/MetaMaskAvatar/MetaMaskAvatar'
import Formatters from '@utils/helpers/formatters'

import { Box, Modal, useDisclosure } from '@chakra-ui/react'
import Paragraph, { ParagraphType } from '@components/common/Text/Paragraph'
import AccountModal from '@components/AccountModal/AccountModal'

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
            variant={ParagraphType.PRIMARY}
            paddingLeft="3"
            paddingRight="2"
            fontWeight="semibold"
          >
            {Formatters.formatEtherBalance(balance)} ETH
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
            <Paragraph variant={ParagraphType.PRIMARY}>
              {Formatters.formatAccountAddressForShortView(signer.address)}
            </Paragraph>
            <MetaMaskAvatar />
          </Button>
          <AccountModal
            address={signer.address}
            isOpen={isOpen}
            onClose={onClose}
          />
        </Box>
      ) : (
        <Button size="sm" onClick={handleConnectWalletButtonClick}>
          Connect wallet
        </Button>
      )}
    </Box>
  )
}

export default ConnectWalletButton
