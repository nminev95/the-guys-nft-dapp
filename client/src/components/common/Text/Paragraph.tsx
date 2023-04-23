import { Text, TextProps } from '@chakra-ui/react'
import { BREAKPOINT_SIZE } from '@utils/constants/chakra'

const Paragraph = ({ children, ...props }: TextProps) => {
  return (
    <Text {...props} fontSize={BREAKPOINT_SIZE.PARAGRAPH}>
      {children}
    </Text>
  )
}

export default Paragraph
