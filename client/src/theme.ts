import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: false
  },
  colors: {
    additional: {
      heavyBlackCustom: '#0b0c10',
      transparentBlack: '#272f36c2'
    }
  },
  styles: {
    global: {
      'html, body': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflow: 'hidden'
      },
      'p, ul, ol, button': {
        margin: 0
      },
      '.chakra-ui-dark': {
        background: 'additional.heavyBlackCustom'
      },
      '.chakra-ui-light': {
        background: 'gray.300'
      }
    }
  }
})

export default theme
