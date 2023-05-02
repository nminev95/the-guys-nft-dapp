import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Text,
  Box,
  Link,
  useClipboard
} from '@chakra-ui/react'
import Button from '@components/common/Button/Button'
import Paragraph, { ParagraphType } from '@components/common/Text/Paragraph'
import MetaMaskAvatar from '@components/MetaMaskAvatar/MetaMaskAvatar'
import { faCopy, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEthers } from '@providers/EthersProvider/EthersProvider'
import Formatters from '@utils/helpers/formatters'
import { useEffect } from 'react'

type Props = {
  address: string
  isOpen: boolean
  onClose: () => void
}

const AccountModal = ({ address, isOpen, onClose }: Props) => {
  const { onCopy, hasCopied, setValue } = useClipboard('')
  const { resetProviderState } = useEthers()

  useEffect(() => {
    setValue(address)
  }, [address])

  return (
    <ChakraModal isCentered size="md" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        background="gray.800"
        border="1px"
        borderStyle="solid"
        borderColor="gray.700"
        borderRadius="3xl"
      >
        <ModalHeader color="teal.200" px={4} fontSize="lg" fontWeight="medium">
          <Paragraph variant={ParagraphType.SECONDARY}>Account</Paragraph>
        </ModalHeader>
        <ModalCloseButton
          color="gray.200"
          fontSize="xs"
          _hover={{
            color: 'teal.400'
          }}
        />
        <ModalBody pt={0} px={4}>
          <Box
            borderRadius="3xl"
            border="1px"
            borderStyle="solid"
            borderColor="gray.700"
            px={5}
            pt={4}
            pb={2}
            mb={3}
          >
            <Flex justifyContent="space-between" alignItems="center" pb={3}>
              <Paragraph variant={ParagraphType.SECONDARY}>
                Connected with MetaMask
              </Paragraph>
              <Button
                variant="outline"
                size="sm"
                borderColor="teal.800"
                borderRadius="lg"
                color="teal.200"
                fontWeight="normal"
                px={2}
                height="26px"
                _hover={{
                  borderColor: 'teal.600',
                  color: 'teal.300'
                }}
                onClick={resetProviderState}
              >
                Disconnect
              </Button>
            </Flex>
            <Flex alignItems="center" gap={3} pb={2}>
              <MetaMaskAvatar />
              <Paragraph
                variant={ParagraphType.PRIMARY}
                fontSize="lg"
                fontWeight="semibold"
              >
                {Formatters.formatAccountAddressForShortView(address)}
              </Paragraph>
            </Flex>
            <Flex alignContent="center">
              <Button
                variant="link"
                color="teal.300"
                fontWeight="normal"
                paddingInlineStart={0}
                paddingStart="0 !important"
                onClick={onCopy}
                _hover={{
                  textDecoration: 'none',
                  color: 'teal.500'
                }}
              >
                <Flex alignItems="center" gap={1}>
                  <FontAwesomeIcon icon={hasCopied ? faCheck : faCopy} />
                  {hasCopied ? 'Copied!' : 'Copy Address'}
                </Flex>
              </Button>
              <Link
                fontSize="md"
                display="flex"
                alignItems="center"
                href={`https://goerli.etherscan.io/address/${address}`}
                isExternal
                color="teal.300"
                _hover={{
                  color: 'teal.500'
                }}
              >
                <Flex alignItems="center" gap={1}>
                  <FontAwesomeIcon icon={faShareFromSquare} />
                  View on Explorer
                </Flex>
              </Link>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default AccountModal
