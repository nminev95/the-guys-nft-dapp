import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ColorModeScript } from '@chakra-ui/react'

import Home from '@pages/Home/Home'

import './index.scss'
import ErrorPage from '@pages/ErrorPage/ErrorPage'
import { EthersContextProvider } from '@providers/EthersProvider/EthersProvider'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  }
])
console.log(theme)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EthersContextProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={router} />
      </ChakraProvider>
    </EthersContextProvider>
  </React.StrictMode>
)
