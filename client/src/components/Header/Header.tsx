import { Box } from '@chakra-ui/react'
import Button from '@components/common/Button/Button'
import { useEthers } from '@providers/EthersProvider/EthersProvider'
import ConnectWalletButton from '@components/ConnectWalletButton/ConnectWalletButton'
import { useColorMode } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import Paragraph from '@components/common/Text/Paragraph'
import Network from '@components/Network/Network'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { chain } = useEthers()
  console.log(window?.ethereum)
  return (
    <Box
      fontSize={['sm', 'md', 'lg']}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      h="60px"
      boxShadow="0 4px 6px -6px #9f9f9f"
      padding="15px 25px"
    >
      <Box />
      <Box display="flex" alignItems="center" gap="3">
        {/* <Box>
          <Paragraph>Goerli</Paragraph>
        </Box> */}
        {chain?.name && <Network network={chain?.name} />}
        <ConnectWalletButton />
        <Button size="sm" onClick={toggleColorMode}>
          <FontAwesomeIcon icon={colorMode === 'dark' ? faMoon : faSun} />
        </Button>
      </Box>
    </Box>
  )
}

export default Header
