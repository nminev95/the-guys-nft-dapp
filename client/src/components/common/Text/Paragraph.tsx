import { Text, TextProps } from '@chakra-ui/react'
import { BREAKPOINT_SIZE } from '@utils/constants/chakra'

export enum ParagraphType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

type Props = TextProps & {
  variant?: ParagraphType
}

const Paragraph = ({ children, variant, color, ...props }: Props) => {
  return (
    <Text
      color={
        variant
          ? variant === ParagraphType.PRIMARY
            ? 'teal.200'
            : 'additional.secondaryText'
          : color
      }
      fontSize={BREAKPOINT_SIZE.PARAGRAPH}
      {...props}
    >
      {children}
    </Text>
  )
}

export default Paragraph
