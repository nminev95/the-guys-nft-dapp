import React, { useState, useCallback, useContext } from 'react'
import {
  NotificationState,
  Props,
  ProviderState
} from '@providers/NotificationProvider/NotificationProvider.types'

const initialState = {
  isVisible: false,
  text: '',
  type: undefined,
  hideNotification: () => {}
}

const NotificationContext = React.createContext({} as ProviderState)

const NotificationProvider = ({ children }: Props) => {
  const [notificationState, setNotificationState] =
    useState<NotificationState>(initialState)

  const showNotification = useCallback(
    (notificationState: NotificationState) => {
      setNotificationState(notificationState)
    },
    []
  )

  const hideNotification = useCallback(() => {
    setNotificationState(initialState)
  }, [])

  return (
    <NotificationContext.Provider
      value={{
        notificationState,
        showNotification,
        hideNotification
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext(NotificationContext)

export default NotificationProvider
