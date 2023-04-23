import { extendTheme } from '@chakra-ui/react'
// 2. Add your color mode config
const config = {
  initialColorMode: 'system',
  useSystemColorMode: false
}
const theme = extendTheme({
  config,
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
        background: 'black'
      },
      '.chakra-ui-light': {
        background: 'gray.200'
      }
    }
  },
  colors: {
    background: {
      primary: '#f7fafc',
      secondary: '#1a202c'
    }
  }
})

export default theme

// const theme = extendTheme({
//   fonts: {
//     body: 'Poppins'
//   },
//   styles: {
//     global: {
//       'html, body': {
//         height: '100vh',
//         backgroundColor: 'gray.50'
//       }
//     }
//   }
// })
