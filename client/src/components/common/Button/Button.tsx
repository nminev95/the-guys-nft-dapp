import {
  Button as ChakraButton,
  useColorModeValue,
  ButtonProps
} from '@chakra-ui/react'
import { BREAKPOINT_SIZE } from '@utils/constants/chakra'

const Button = ({ children, onClick, ...props }: ButtonProps) => {
  const bg = useColorModeValue('teal.600', 'gray.800')
  const color = useColorModeValue('white', 'teal.200')
  const hoverBg = useColorModeValue('teal.700', 'gray.700')
  const hoverColor = useColorModeValue('gray.200', 'teal.100')

  return (
    <ChakraButton
      borderRadius="lg"
      size={BREAKPOINT_SIZE.BUTTON}
      bg={bg}
      color={color}
      onClick={onClick}
      _hover={{ bg: hoverBg, color: hoverColor }}
      {...props}
    >
      {children}
    </ChakraButton>
  )
}

export default Button
