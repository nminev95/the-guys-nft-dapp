import { Box } from '@chakra-ui/react'
import Button from '@components/common/Button/Button'

const height = 450
const width = 350

const MintBox = () => {
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
      <Button>MINT NOW</Button>
    </Box>
  )
}
export default MintBox
