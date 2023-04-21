import React, { useState, useCallback, useContext } from 'react'
import {
  NotificationState,
  Props,
  ProviderState
} from '@providers/NotificationProvider/NotificationProvider.types'

const NotificationContext = React.createContext({} as ProviderState)

const NotificationProvider = ({ children }: Props) => {
  const [notificationState, setNotificationState] = useState<NotificationState>(
    {} as NotificationState
  )

  const showNotification = (notificationState: NotificationState) => {
    setNotificationState(notificationState)
  }

  const hideNotification = () => {
    setNotificationState({} as NotificationState)
  }

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
