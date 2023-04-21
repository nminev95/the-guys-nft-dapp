export type Props = {
  children: React.ReactNode
}

export type NotificationState = {
  text: string
  type: 'error' | 'warning' | 'success'
  isVisible: false
  hideDelay?: number
  autoHide?: boolean
}

export type ProviderState = {
  notificationState: NotificationState
  showNotification: (notificationState: NotificationState) => void
  hideNotification: () => void
}
