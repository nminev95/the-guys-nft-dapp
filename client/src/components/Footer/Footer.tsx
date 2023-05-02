import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      fontSize={['sm', 'md', 'lg']}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      h="60px"
      boxShadow="0 -4px 6px -6px #9f9f9f"
      padding="15px 25px"
      position="sticky"
      bottom="0"
    ></Box>
  )
}

export default Footer
