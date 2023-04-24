import { Box } from '@chakra-ui/react'
import Paragraph from '@components/common/Text/Paragraph'

type Props = {
  network: string
}

const Network = ({ network }: Props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      bg="gray.800"
      color="teal.400"
      h="34px"
      borderRadius="lg"
      p={1}
      fontWeight="semibold"
      textTransform="capitalize"
    >
      <Paragraph pr={3} pl={3}>
        {network}
      </Paragraph>
    </Box>
  )
}

export default Network
