import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@pages/Home/Home'

import './index.scss'
import ErrorPage from '@pages/ErrorPage/ErrorPage'
import { EthersContextProvider } from './providers/EthersProvider/EthersProvider'
import NotificationProvider from '@providers/NotificationProvider/NotificationProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NotificationProvider>
      <EthersContextProvider>
        <RouterProvider router={router} />
      </EthersContextProvider>
    </NotificationProvider>
  </React.StrictMode>
)
