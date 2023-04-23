import {
  Button as ChakraButton,
  useColorModeValue,
  ButtonProps
} from '@chakra-ui/react'

const Button = ({ children, onClick }: ButtonProps) => {
  const bg = useColorModeValue('teal.600', 'gray.800')
  const color = useColorModeValue('white', 'teal.200')
  const hoverBg = useColorModeValue('teal.700', 'gray.700')
  const hoverColor = useColorModeValue('gray.200', 'teal.100')

  return (
    <ChakraButton
      size={['xs', 'sm', 'md']}
      bg={bg}
      color={color}
      onClick={onClick}
      _hover={{ bg: hoverBg, color: hoverColor }}
    >
      {children}
    </ChakraButton>
  )
}

export default Button
