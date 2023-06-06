import { Box } from '@chakra-ui/react'
import Button from '@components/common/Button/Button'
import { useEthers } from '@providers/EthersProvider/EthersProvider'
import {
  ethers,
  hexlify,
  keccak256,
  verifyMessage,
  verifyTypedData
} from 'ethers'
import Api from '@api/api'
import { signTypedData } from '@metamask/eth-sig-util'

const height = 560
const width = 420

const MintBox = () => {
  const { signer } = useEthers()

  const handleMintButtonClick = async () => {
    const domain = {
      name: 'TheGuysNFT',
      version: '1.0.0',
      chainId: 1,
      verifyingContract: '0x1111111111111111111111111111111111111111'
    }

    const types = {
      'Mint NFT': [
        { name: 'from', type: 'Person' },
        { name: 'to', type: 'Person' },
        { name: 'content', type: 'string' }
      ],
      Person: [
        { name: 'name', type: 'string' },
        { name: 'wallet', type: 'address' }
      ]
    }

    const mail = {
      from: {
        name: 'Alice',
        wallet: '0x2111111111111111111111111111111111111111'
      },
      to: {
        name: 'Bob',
        wallet: '0x3111111111111111111111111111111111111111'
      },
      content: 'Hello!'
    }
    // const sig = signTypedData({ privateKey: })
    const signature = await signer?.signTypedData(domain, types, mail)
    console.log(signature)
    if (signature) {
      const address = verifyTypedData(domain, types, mail, signature)
    }

    try {
      const res = await Api.sendSignature(signature)
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Box
      borderRadius="3xl"
      border="3px"
      borderStyle="solid"
      borderColor="gray.700"
      px={5}
      pt={4}
      pb={2}
      position="absolute"
      top={`calc(50% - ${height / 2}px)`}
      left={`calc(50% - ${width / 2}px)`}
      background="additional.heavyBlackCustom"
      h={height}
      w={width}
    >
      <Button onClick={handleMintButtonClick}>MINT NOW</Button>
    </Box>
  )
}
export default MintBox
