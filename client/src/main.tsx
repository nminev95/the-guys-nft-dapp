import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@pages/Home/Home'

import './index.scss'
import ErrorPage from '@pages/ErrorPage/ErrorPage'
import { EthersContextProvider } from './providers/EthersProvider/EthersProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EthersContextProvider>
      <RouterProvider router={router} />
    </EthersContextProvider>
  </React.StrictMode>
)
