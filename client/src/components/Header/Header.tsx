import { Box } from '@chakra-ui/react'
import Button from '@components/common/Button/Button'
import { useEthers } from '@providers/EthersProvider/EthersProvider'
import ConnectWalletButton from '@components/ConnectWalletButton/ConnectWalletButton'
import { useColorMode } from '@chakra-ui/react'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
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
      {/* <div ref={avatarRef}></div> */}
      <p>Logo goessshereee</p>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      <ConnectWalletButton />
    </Box>
  )
}

export default Header
